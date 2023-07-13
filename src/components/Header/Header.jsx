import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <div>
        <input type='search' />
        <button>0</button>
      </div>
      <div>
        <button>Sort</button>
        <button>View</button>
      </div>
    </div>
  );
}

export default Header;
