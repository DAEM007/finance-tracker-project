// All react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All hooks import
import { useAuthContext } from "./hooks/useAuthContext";
// All component imports
import NavBar from "./components/NavBar";
// All pages import
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/login" element={ <Login /> } />
          </Routes>
        </Router>
      ) }
    </div>
  );
}

export default App;
