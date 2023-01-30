// All react imports
import { Link } from "react-router-dom";
// All hooks import
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// All styles import
import styles from "./NavBar.module.css";



export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();


  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>mymoney</li>

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
          
            {user && (
              <>
                <li>Hello, { user.displayName }</li>
                <li>
                  <button className="btn" onClick={logout}>Logout</button>
                </li>
              </>
            )}

        </ul>
    </nav>
  )
}
