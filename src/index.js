// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// styles imports
import './index.css';
import App from './App';
// context imports
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);


