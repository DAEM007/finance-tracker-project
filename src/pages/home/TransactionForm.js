// All react imports
import { useEffect, useState } from "react";
// All firebase imports
import useFirestore from "../../hooks/useFirestore";


const TransactionForm = ({ userId }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const { AddDocument, response } = useFirestore('transactions');

    // function to handle submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add documents to firebase
        AddDocument({
            uid: userId,
            name,
            amount
        })

    }

    // clear form as a side effect after submitting the form
    useEffect(() => {
        if(response.success){
            setName('');
            setAmount('');
        }
    }, [response.success])

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name:</span>
                    <input 
                        type="text"
                        onChange={ (e) => setName(e.target.value) }
                        value={ name }
                        required
                    />
                </label>

                <label>
                    <span>Amount($):</span>
                    <input 
                        type="number"
                        onChange={ (e) => setAmount(e.target.value) }
                        value={ amount }
                        required
                    />
                </label>
                <button>Add transaction</button>
            </form>
        </>
    );
}
 
export default TransactionForm;