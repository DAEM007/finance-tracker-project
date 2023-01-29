// All react imports
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
// All styles imports
import styles from "./Login.module.css";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isPending, login } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password);

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

      { !isPending && <button className="btn">Login</button> }
      { isPending && <button className="btn" disabled >Loading...</button> }
      { error && <p>{ error }</p> }

    </form>
  )
}

