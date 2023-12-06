import React from 'react';

const GamePage = ({ match }) => {
  const gameId = match.params.id; // получаем параметр id из URL
  // Здесь ты можешь использовать gameId для загрузки данных об игре и отображения подробной информации
  return (
    <div>
      <h2>Страница игры #{gameId}</h2>
      {/* Здесь может быть подробная информация о игре */}
    </div>
  );
};

export default GamePage;
