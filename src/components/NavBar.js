// All react imports
import { Link } from "react-router-dom";
// All styles import
import styles from "./NavBar.module.css";


export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>mymoney</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
        </ul>
    </nav>
  )
}
