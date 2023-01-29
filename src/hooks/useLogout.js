// All react imports
import { useState, useEffect } from "react";
// All firebase imports
import { auth } from "../firebase/Config";
import { signOut } from "firebase/auth";
// All context imports
import { useAuthContext } from "./useAuthContext";


const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [ispending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try{
            // sign user out
            await signOut(auth);

            // dispatch a logout action
            dispatch({ type: 'LOGOUT' });

            // update states only when isCancelled is false for useEffect cleanup
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }

        }
        catch(err) {
            if(!isCancelled){
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    // clean up function to deal with leakages and unwanted behaivours in mounting/unmounting component
    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    // return the destructured form of all variables and functions to be used
    return { error, ispending, logout };

}
 
export default useLogout;