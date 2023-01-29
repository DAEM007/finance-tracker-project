// All react imports
import { useState, useEffect } from "react";
// Firebase imports
import { auth } from "../firebase/Config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// all hooks import
import { useAuthContext } from "./useAuthContext";


const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const signUp = async (email, password, name) => {
        setError(null);
        setIsPending(true);

        try{
            // signup users
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(cred.user);

            // If we don't get a response for cred then we need an error
            if(!cred){
                throw new Error('Could not complete signup!');
            }

            // If we do get a response for cred then we can update the user's information
            await updateProfile(auth.currentUser, { displayName: name });

            // dispatch an action to Signup/Login
            dispatch({type: 'LOGIN', payload: cred.user});

            // update states only when isCancelled is false for useEffect cleanup
            if(!isCancelled){
                setError(null);
                setIsPending(false);
            }
            

        }
        catch(err){
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
    return {error, isPending, signUp}

}
 
export default useSignup;