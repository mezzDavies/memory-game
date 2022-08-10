import "../styles/SingleCard.css";

export default function SingleCard({ card, handleChoice, isFlipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={isFlipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="back"
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
}
