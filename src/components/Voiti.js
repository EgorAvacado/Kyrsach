import React from "react";
import "../App.css";

const Voiti = () => {
  return (
    <div className="registration-container">
      <h2>С Возвращением!</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Voiti;
