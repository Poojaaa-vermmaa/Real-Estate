import React from "react"; 
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
   


const Nav = () =>{
  const data = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup');
  };
  
    return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
   <img src={require("./pic.jpg")} height="80px" alt="logo"/>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link "  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Chatbot">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Admin</NavLink>
        </li>
        {data ? (
        
        <li className="regis">
        <NavLink className="nav-link" to="/signup" onClick={logout}> <button type="button" class="btn btn-info">Logout</button></NavLink>
        </li>):(
          <>
        <li className="regis1">
        <NavLink className="nav-link" to="/signin"> <button type="button" class="btn btn-info">Login</button></NavLink>
        </li>
        <li className="regis2">
        <NavLink className="nav-link" to="/signup"> <button type="button" class="btn btn-info">Register</button></NavLink>
        </li>
        </>
)}
       </ul>
       </div>
       
  </div>
</nav>

</>
);
}

export default Nav;