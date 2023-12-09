import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  //const { location } = props;

  return (
    <div className="header">
      <input type="text" className="search-bar" placeholder="Поиск" />
      <div className="logo">
        <Link className="Nazvanie" to="/">
          Gamigos
        </Link>
      </div>
      <div className="header-buttons">
        <button>Все игры</button>
        <li>
          <Link to="/signin">Sigh in</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/about">О нас</Link>
        </li>
      </div>
      {/* <div className="current-path">{location.pathname}</div> */}
    </div>
  );
};

export default Header;
