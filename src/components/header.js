import React from 'react';
import '../App.css'; // Файл для стилей

const Header = () => {
  return (
    <div className="header">
      <input type="text" className="search-bar" placeholder="Поиск" />
      <div className="logo">Gamigos</div>
      <div className="header-buttons">
        <button>Все игры</button>
        <button>Ваш аккаунт</button>
        <button>О нас</button>
      </div>
    </div>
  );
};

export default Header;
