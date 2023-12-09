//import { useLocation } from "react-router-dom";
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
  //const currentLocation = useLocation();

  return (
    <>
      {/* <Header location={currentLocation} /> */}
      {props.children}
      <div className="greeting-container">
        <h1>Приветствую, Амиго! Не желаешь сыграть?</h1>
        <div className="content-block">
          <img src="/mix.jpg" alt="Изображение 1" />
          <p>
            Если ты хочешь найти человека, который станет тебе верным
            компаньёном в новой игре или пройти с кем-нибудь давно забытую
            многими игрулю? Тогда ты попал на правильный сайт, мой друг.
            Буквально в несколько кликов ты сможешь найти себе нового игрового
            товарища и вместе покорить с ним покорить верхушки рейтинга или
            исследовать необычные миры без страха не справится в одиночку!
          </p>
        </div>
        <div className="content-block1">
          <img src="/games1.png" alt="Изображение 2" />
          <p>
            У нас ты найдешь игры для всех возрастов и интересов. От уже давно
            ставшими легендами в жанре мультиплеерных игр Dota 2, CSGO 2, League
            of legends и Dbd, до уже многими забытыми старыми частями
            Battlefield или Trine. Прикрывай спину своего амиго в одной из
            частей Borderlands или очищай вместе с ним темнейшие подземелья в
            Diablo 2. Не важен жанр - важен только твой игровой вкус!
          </p>
        </div>
        <p>Может вместо слов - сыграем во что-нибудь?</p>
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
