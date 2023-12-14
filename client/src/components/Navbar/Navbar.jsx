import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./nav.css";
import { setCurrentUser } from "../../actions/curentUser";
function Navbar() {
    const dispatch=useDispatch()
  var User =useSelector((state)=>(state.currentUserReducer))
  useEffect(()=>{
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  },[dispatch])
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img width={150} src={logo} alt="" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form action="">
          <input type="text" placeholder="Search..." />
          <img src={search} className="search-icon" alt="" width="18" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log In
          </Link>
        ) : (
          <div className="nav-item nav-avatar">
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>
            <button className="nav-item nav-links">Log Out</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
