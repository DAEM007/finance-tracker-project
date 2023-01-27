import { useState } from "react";
import { auth } from "../firebase/Config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const useSignup = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (email, password, name) => {
        setError(null);
        setIsPending(true);

        try{
            // signup users
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            console.log(cred.user);

            // If we don't get a response for cred then we need an error
            if(!cred){
                throw new Error('Could not complete signup!');
            }

            // If we do get a response for cred then we can update the user's information
            await updateProfile(auth.currentUser, { displayName: name });

            setError(null);
            setIsPending(false);

        }
        catch(err){
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
        

    }

    // return the destructured form of all variables and functions to be used
    return {error, isPending, signUp}

}
 
export default useSignup;