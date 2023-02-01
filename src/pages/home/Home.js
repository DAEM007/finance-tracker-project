// All styles import
import styles from "./Home.module.css";
// All component imports
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
// All hooks import
import { useAuthContext } from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";


export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('transactions');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { error && <p>{ error }</p> }
        { documents && < TransactionList transactions={documents} /> }
      </div>
      <div className={styles.sidebar}>
        <TransactionForm userId={ user.uid } />
      </div>
    </div>
  )
}

