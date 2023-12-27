import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    discord: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { nickname, password, discord } = formData;

    if (!nickname || !password || !discord) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    axios
      .post("http://localhost:3001/api/users", formData)
      .then((response) => {
        console.log(response.data.message);
        toast.success("Успешная регистрация");
        setFormData({
          nickname: "",
          Password: "",
          discord: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Ошибка при регистрации" + error.message);
      });

    // Сбросить значения полей формы после отправки данных
    setFormData({
      nickname: "",
      password: "",
      discord: "",
    });
  };

  return (
    <div className="registration-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nickname">Никнейм</label>
          <input
            type="text"
            id="nickname"
            value={formData.nickname}
            onChange={(event) =>
              setFormData({ ...formData, nickname: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="discord">Discord</label>
          <input
            type="text"
            id="discord"
            value={formData.discord}
            onChange={(event) =>
              setFormData({ ...formData, discord: event.target.value })
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
        <button type="submit">Зарегистрироваться</button>
      </form>
      <ToastContainer />
      {}
    </div>
  );
};

export default Registration;
