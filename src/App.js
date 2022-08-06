import { useEffect, useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
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
  useEffect(shuffleCards, []);

  // console.log("cards are shuffled", cards, turns);

  return (
    <div className="App">
      <h1>Magic match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src="/img/cover.png" alt="card back" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
