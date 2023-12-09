import React from "react";
import "../App.css";

const Registration = () => {
  return (
    <div className="registration-container">
      <h2>Регистрация</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Подтверждение пароля</label>
          <input type="password" id="confirm-password" />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
