// All react imports
import { useState } from "react";
// All styles imports
import styles from "./Login.module.css";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`email: ${email} password: ${password}`);

  }

  return (
    <form onSubmit={handleLogin} className={styles['login-form']}>
      <h2>Login here...</h2>
      <label>
        <span>email:</span>
        <input 
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>

      <label>
        <span>password:</span>
        <input 
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>

      <button className="btn">Login</button>

    </form>
  )
}

