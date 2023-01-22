// All react imports
import { useState } from "react";
// All styles import
import styles from "./Signup.module.css";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
      e.preventDefault();
      console.log(`name: ${name} email: ${email} password: ${password}`);
  }

  return (
    <form onSubmit={handleSignup} className={styles['sign-up']}>

      <h2>Signup here...</h2>
      <label>
        <span>name:</span>
        <input 
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required 
        />
      </label>

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

      <button>SignUp</button>

    </form>  
  )
}
