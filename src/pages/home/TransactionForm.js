// All react imports
import { useState } from "react";


const TransactionForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    // function to handle submission of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            name,
            amount
        });
    }

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