import React from 'react';
import Header from './components/header';
import GameFrame from './components/Gamefreames';
//import GamePage from './components/gamepage';
//import { BrowserRouter as Routes, Router, Route} from 'react-router-dom';
import './App.css';


const App = () => {
  // Массив с данными об играх
  const games = [
    { id: 1, imageUrl: '/costumes1.jpg', altText: 'Игра 1' },
    { id: 2, imageUrl: '/costumes2.jpg', altText: 'Игра 2' },
    { id: 3, imageUrl: '/costumes3.jpg', altText: 'Игра 3' },
    { id: 4, imageUrl: '/costumes4.jpg', altText: 'Игра 4' },
    { id: 5, imageUrl: '/costumes5.jpg', altText: 'Игра 5' },
    { id: 6, imageUrl: '/costumes.jpg', altText: 'Игра 6' },
    // Добавь остальные игры
  ];

  return (
    <div>
      <Header />
      <div className="greeting-container">
        <h1>Приветствую, Амигос! Не желаешь сыграть?</h1>
        <p>Вечная классика</p>
      </div>
      <div className="container game-frames-container">
        {/* Мапим игры и создаем для каждой компонент GameFrame */}
        {games.map((game) => (
          <GameFrame key={game.id} imageUrl={game.imageUrl} altText={game.altText} />
        ))}
      </div>
    </div>
  );
};

export default App;

