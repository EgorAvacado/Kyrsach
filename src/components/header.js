import React from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const { location } = props;
  return (
    <div className="header">
      <input type="text" className="search-bar" placeholder="Поиск" />
      <div className="logo">
        <Link to="/">ЕБать мой череп</Link>
      </div>
      <div className="header-buttons">
        <button>Все игры</button>
        <button>Ваш аккаунт</button>
        <Link to="/about">О нас</Link>
      </div>
      <div className="current-path">{location.pathname}</div>
    </div>
  );
};

export default Header;
