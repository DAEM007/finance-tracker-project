// styles import
import styles from "./Home.module.css"; 
// All hooks import
import useFirestore from "../../hooks/useFirestore";

const TransactionList = ({ transactions }) => {
    const { DeleteDocument } = useFirestore('transactions');
    
    return(
        <ul className={styles.transactions}>
            { transactions && transactions.map((transaction) => (
                <li key={transaction.id}>
                    <p className={styles.name}>{ transaction.name }</p>
                    <p className={styles.amount}>${ transaction.amount }</p>
                    <button onClick={() => DeleteDocument(transaction.id)}>x</button>
                </li>
            )) }
        </ul>
    )
}
 
export default TransactionList;