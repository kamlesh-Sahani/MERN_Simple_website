import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./componets/Nav";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Contact from "./componets/Contact";
import About from "./componets/About";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
