import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/auth";

import logo from "/fileno.svg";
import "./SideBar.scss";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm("You are reali want logout")) {
      dispatch(logout());
      window.localStorage.removeItem("token")
    }
    navigate("/")
  };

  return (
    <div className='side-bar'>
      <Link className='logo'>
        <img src={logo} alt='' />
      </Link>
      <nav>
        <p>Drive Storage</p>
        <ul>
          <Link to={"/"}>My Drive</Link>
          <br />
          <Link to={"/star"}>Starred</Link>
          <li>Computer</li>
          <li>Recents</li>
          <li>Trash</li>
        </ul>
        <p>Tags</p>
        <ul>
          <li>Red</li>
          <li>Green</li>
          <li>Blue</li>
        </ul>
      </nav>
      <button onClick={onClickLogout}>Log out</button>
    </div>
  );
}

export default SideBar;
