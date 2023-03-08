// All react imports
import { Link } from "react-router-dom";
// All hooks import
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// All styles import
import styles from "./NavBar.module.css";
// All assets import
import DollarSign from "../assets/dollar-sign.png";



export default function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();


  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>
              <span>My M</span>
              <img 
                style={{
                  width: "50px",
                  height: "40px",
                  objectFit: "contain",
                }}
                src={DollarSign}
                alt="dollar-sign"
              />
              <span>ney</span>
            </li>

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
