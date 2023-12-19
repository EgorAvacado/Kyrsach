import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../App.css";

const Voiti = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nickname, password } = formData;

    if (!nickname || !password) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    axios
      .post("http://localhost:3001/api/login", formData)
      .then((response) => {
        console.log(response.data.message);
        navigate("/youracc");
      })
      .catch((error) => {
        console.error(error);
        alert("Ошибка при входе" + error.message);
      });

    setFormData({
      nickname: "",
      password: "",
    });
  };

  return (
    <div className="registration-container">
      <h2>С Возвращением!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Никнейм</label>
          <input
            type="text"
            id="name"
            value={formData.nickname}
            onChange={(event) =>
              setFormData({ ...formData, nickname: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Voiti;
