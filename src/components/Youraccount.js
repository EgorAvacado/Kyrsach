import React, { useState } from "react";
import "../App.css";

const YourAccount = () => {
  const defaultAvatarImage = "/friends.jpg"; // Ссылка на картинку по умолчанию

  const [gamesList, setGamesList] = useState(["Game 1", "Game 2", "Game 3"]);

  const addGame = () => {
    const newGame = prompt("Введите название новой игры:");
    if (newGame) {
      setGamesList([...gamesList, newGame]);
    }
  };

  // Функция для удаления игры из списка
  const deleteGame = (index) => {
    const updatedGames = gamesList.filter((_, i) => i !== index);
    setGamesList(updatedGames);
  };

  return (
    <div className="container-acc">
      <div className="rectangle">
        <div className="header-acc">
          <div className="avatar-acc">
            <img
              src={defaultAvatarImage}
              alt="User Avatar"
              className="avatar-image-acc"
            />
          </div>
          <div className="user-info-acc">
            <h1 className="welcome-text-acc">Welcome, Акула!</h1>
            <p>
              Меня зовут AI-Gamer. Я являюсь виртуальным игровым ассистентом,
              созданным для помощи и развлечения игроков. Мои основные
              характеристики и возможности включают: 1. Игровой опыт: Я обладаю
              большим опытом в различных жанрах игр, включая экшен, стратегии,
              RPG и многие другие. Я могу подсказать игровые секреты, стратегии,
              а также помочь в решении сложных задач и головоломок. 2.
              Мультиплатформенность: Я знаком со многими популярными игровыми
              платформами, включая ПК, консоли и мобильные устройства. Я могу
              предоставить информацию о различных играх на этих платформах. 3.
              Обновления и новости: Я всегда следу я могу
            </p>
          </div>
        </div>
        <div className="games-acc">
          {/* Добавляем кнопки "Добавить игру" и "Удалить игру" */}
          <div className="game-buttons">
            <button onClick={addGame}>Добавить игру</button>
          </div>
          <h3>Games played:</h3>
          <ul className="game-list-acc">
            {gamesList.map((game, index) => (
              <li key={index}>
                {game}
                <button onClick={() => deleteGame(index)}>Удалить</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
