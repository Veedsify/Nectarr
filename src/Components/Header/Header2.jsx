import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header2.css";
import logo from "../../assets/Images/signup-logo.png";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useCartStore } from "../../Context/cart-context";
import CartNumber from "../CartItems/CartNumber";
const Navbar = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { _id, firstName } = useSelector((state) => state?.buyer);
  const buyer = useSelector((state) => state?.buyer);
  const token = localStorage.getItem("token");
  // const user= JSON.parse(localStorage.getItem("user"))
  // console.log(user.firstName)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const logout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="NectarBuz" />
        <p style={{fontSize:'14px'}}>A spoonfull of Health</p>
      </div>
      <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/hampper" activeClassName="active">
              HAMPER
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active" className="dropdown">
              CART
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/getStarted"
              activeClassName="active"
              className="dropdown"
            >
              ACCOUNT
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__icons">
        <NavLink to="/search" className="navbar__icon">
          <FaSearch />
        </NavLink>
        <div className="navbar_cart_icon_container">
          <CartNumber />
        </div>
        {token == null ? (
          <NavLink to="/getStarted" className="navbar__icon">
            <VscAccount /> {""}
          </NavLink>
        ) : (
          <div className="loggedin_user_profile_container">
            <div
              className="loggedin_user"
              onClick={() => setShowLogout(!showLogout)}
            >
              {firstName?.charAt(0).toUpperCase()}
            </div>
            {showLogout == true ? (
              <div className="home_logout" onClick={logout}>
                logout
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </header>
  );
};
export default Navbar;
