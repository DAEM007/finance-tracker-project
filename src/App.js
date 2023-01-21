// All react imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
// All pages imports
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
