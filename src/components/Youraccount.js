import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const YourAccount = () => {
  const defaultAvatarImage = "/ava.png"; // Ссылка на картинку по умолчанию
  const [gamesList, setGamesList] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGamesDisplay, setSelectedGamesDisplay] = useState([]);
  const [gameInfo, setGameInfo] = useState(null);
  const [playersInfo, setPlayersInfo] = useState([]);
  const [showPlayersModal, setShowPlayersModal] = useState(false);

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

  const handleRemoveGame = async (gameId) => {
    try {
      await axios.post("http://localhost:3001/api/user/games/remove", {
        userId: "1",
        gameId: gameId,
      });

      const updatedGamesList = selectedGamesDisplay.filter(
        (game) => game.id !== gameId
      );
      setSelectedGamesDisplay(updatedGamesList);
    } catch (error) {
      console.error("Error removing game from user", error);
    }
  };

  const handleShowGameInfo = async (gameId) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/games/users",
        {
          gameId: gameId,
        }
      );

      const { game, players } = response.data;
      setGameInfo(game);
      setPlayersInfo(players);
      setShowPlayersModal(true);
    } catch (error) {
      console.error("Error fetching game and players", error);
    }
  };

  const handleGameSelection = (gameId) => {
    const isSelected = selectedGames.includes(gameId);
    if (isSelected) {
      setSelectedGames(selectedGames.filter((id) => id !== gameId));
    } else {
      setSelectedGames([...selectedGames, gameId]);
    }
  };
  const gamesPerRow = 6; // количество игр в одном ряду
  const groupedGames = chunkArray(selectedGamesDisplay, gamesPerRow);
  const handleSaveGames = async () => {
    try {
      await axios.post("http://localhost:3001/api/user/games/add", {
        userId: "1",
        games: selectedGames,
      });

      const updatedSelectedGames = gamesList.filter((game) =>
        selectedGames.includes(game.id)
      );
      console.log(updatedSelectedGames);
      setSelectedGamesDisplay(updatedSelectedGames);

      setShowModal(false);
    } catch (error) {
      console.error("Error saving games to user", error);
    }
  };

  function chunkArray(arr, size) {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }

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
            <h1 className="welcome-text-acc">Welcome, User!</h1>
            <p>Место для информации о пользователе</p>
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
          {groupedGames.map((row, index) => (
            <div className="game-row" key={index}>
              {row.map((game) => (
                <div className="game-item" key={game.id}>
                  <img src={game.picture} alt={game.title} />
                  <p>{game.title}</p>

                  <button onClick={() => handleShowGameInfo(game.id)}>
                    Информация об игре
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleRemoveGame(game.id)}
                  >
                    &#10006;
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        {showPlayersModal && (
          <div className="players-modal">
            <div className="players-modal-content">
              <span
                className="close"
                onClick={() => setShowPlayersModal(false)}
              >
                &times;
              </span>
              {gameInfo && (
                <div>
                  <h3>{gameInfo.title}</h3>
                  <p>{gameInfo.description}</p>
                  <ul>
                    {playersInfo.map((users) => (
                      <li key={users.id}>
                        <p>Ник: {users.nickname}</p>
                        <p>Дискорд: {users.discord}</p>
                        <p>Описание: {users.personality}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourAccount;
