// All react imports
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// All hooks import
import { useAuthContext } from "./hooks/useAuthContext";
// All component imports
import NavBar from "./components/NavBar";
// All pages import
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && (
        <Router>
          <NavBar />
          <Routes>
           <Route 
            path="/"
            element={ user ? <Home /> : <Navigate to='/login' /> } 
            />
           <Route 
            path="/signup"
            element={ !user ? <Signup /> : <Navigate to='/' /> } 
            />
           <Route 
            path="/login"
            element={ !user ? <Login /> : <Navigate to='/' /> } 
            />
          </Routes>
        </Router>
      ) }
    </div>
  );
}

export default App;
