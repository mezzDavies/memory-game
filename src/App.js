import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/helmet-1" },
  { src: "/img/potion-1" },
  { src: "/img/ring-1" },
  { src: "/img/scroll-1" },
  { src: "/img/shield-1" },
  { src: "/img/sword-1" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => {
        return { ...card, id: Math.random() };
      });
    setCards(shuffledCards);
    setTurns(0);
  };
  console.log("cards are shuffled", cards, turns);

  return (
    <div className="App">
      <h1>Magic match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
