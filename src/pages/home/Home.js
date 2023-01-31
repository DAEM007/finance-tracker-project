// All styles import
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Home.module.css";
// All component imports
import TransactionForm from "./TransactionForm";


export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction list
      </div>
      <div className={styles.sidebar}>
        <TransactionForm userId={ user.uid } />
      </div>
    </div>
  )
}
