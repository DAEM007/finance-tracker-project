// All react imports
import { Link } from "react-router-dom";
// All hooks import
import useLogout from "../hooks/useLogout";
// All styles import
import styles from "./NavBar.module.css";


export default function NavBar() {
  const { logout } = useLogout();


  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>mymoney</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>

            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
        </ul>
    </nav>
  )
}
