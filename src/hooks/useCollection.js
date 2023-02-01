// All react imports
import { useState, useEffect } from "react";

// All firebase imports
import { db } from "../firebase/Config";
import { collection, onSnapshot } from "firebase/firestore";

const useCollection = (col) => {
    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // collection reference
        let colRef = collection(db, col);

        // Fetch documents from the collection
        const unsub = onSnapshot(colRef, (snapshot) => {
            const results = [];
            snapshot.docs.forEach((doc) => {
                results.push({ ...doc.data(), id: doc.id })
            })
            console.log(results);
            // update states
            setDocuments(results);
            setError(null);
        }, (err) => {
            console.log(err.message);
            setError('Could not fetch data from firebase collection');
        })

        return () => unsub()
        
    }, [col])

    return { documents, error };

}
 
export default useCollection;