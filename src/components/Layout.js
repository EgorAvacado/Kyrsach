import Header from "./header";
import { useLocation } from "react-router-dom";
import GameFrame from "./Gamefreames";
const games = [
  { id: 1, imageUrl: "/costumes1.jpg", altText: "Игра 1" },
  { id: 2, imageUrl: "/costumes2.jpg", altText: "Игра 2" },
  { id: 3, imageUrl: "/costumes3.jpg", altText: "Игра 3" },
  { id: 4, imageUrl: "/costumes4.jpg", altText: "Игра 4" },
  { id: 5, imageUrl: "/costumes5.jpg", altText: "Игра 5" },
  { id: 6, imageUrl: "/costumes.jpg", altText: "Игра 6" },
];

export const Layout = (props) => {
  const currentLocation = useLocation();

  return (
    <>
      <Header location={currentLocation} />
      {props.children}
      <div className="greeting-container">
        <h1>Приветствую, Амигос! Не желаешь сыграть?</h1>
        <p>Вечная классика</p>
      </div>
      <div className="container game-frames-container">
        {games.map((game) => (
          <GameFrame
            key={game.id}
            imageUrl={game.imageUrl}
            altText={game.altText}
          />
        ))}
      </div>
    </>
  );
};
