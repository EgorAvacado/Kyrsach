import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Путь к вашему файлу со стилями

const YourAccount = () => {
  const defaultAvatarImage = "/friends.jpg"; // Ссылка на картинку по умолчанию
  const [gamesList, setGamesList] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGamesDisplay, setSelectedGamesDisplay] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/games");
        setGamesList(response.data);
      } catch (error) {
        console.error("Error fetching games", error);
      }
    };
    fetchGames();
  }, []);

  const handleAddGame = () => {
    setShowModal(true);
  };

  const handleGameSelection = (gameId) => {
    const isSelected = selectedGames.includes(gameId);
    if (isSelected) {
      setSelectedGames(selectedGames.filter((id) => id !== gameId));
    } else {
      setSelectedGames([...selectedGames, gameId]);
    }
  };

  const handleSaveGames = async () => {
    try {
      await axios.post("http://localhost:3001/api/user/games/add", {
        userId: "1",
        games: selectedGames,
      });

      const updatedSelectedGames = gamesList.filter((game) =>
        selectedGames.includes(game.id)
      );
      console.log(updatedSelectedGames); // Добавьте эту строку для проверки данных
      setSelectedGamesDisplay(updatedSelectedGames);

      setShowModal(false);
    } catch (error) {
      console.error("Error saving games to user", error);
    }
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
              Привет, я Разрушитель! Я страстный геймер и любитель видеоигр. Мои
              пальцы ловко управляют геймпадом или клавиатурой, а мои глаза
              всегда сосредоточены на экране, где разворачиваются невероятные
              приключения и сражения. Я пристрастился к широкому спектру игровых
              жанров, от захватывающих экшенов и ролевых игр до интригующих
              головоломок и соревновательных многопользовательских сражений.
              Виртуальные миры стали моим вторым домом, а игровые персонажи -
              верными спутниками. Когда я вступаю в игровой мир, я
              сосредотачиваюсь на достижении высоких результатов и постоянном
              развитии своего навыка игры. Я стремлюсь к тому, чтобы стать
              лучшим в своей команде или соревновании и покорить самые сложные
              испытания, с которыми сталкиваются геймеры.
            </p>
          </div>
        </div>
        <div className="games-acc">
          <div className="game-buttons">
            <button onClick={handleAddGame}>Добавить игру</button>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <h3>Выберите игры:</h3>
                <ul className="game-list">
                  {gamesList.map((game) => (
                    <li key={game.id}>
                      <label>
                        <input
                          type="checkbox"
                          value={game.id}
                          onChange={() => handleGameSelection(game.id)}
                          checked={selectedGames.includes(game.id)}
                        />
                        {game.title}
                      </label>
                    </li>
                  ))}
                </ul>
                <button className="save-btn" onClick={handleSaveGames}>
                  Сохранить выбранные игры
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="selected-games">
          <h3>Выбранные игры:</h3>
          <ul>
            {selectedGamesDisplay.map((game) => (
              <li key={game.id}>{game.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
