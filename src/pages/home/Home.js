// All styles import
import styles from "./Home.module.css";
// All component imports
import TransactionForm from "./TransactionForm";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        content
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}
