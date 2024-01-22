const GameScoreboard = ({ score, gameIsEnded }) => {
  const visibilityStatus = gameIsEnded ? 'hidden' : 'visible';
  return (
    <section className="game-scoreboard" style={{ visibility: visibilityStatus }}>
      <h3 className="score">Your Score : {score}</h3>
    </section>
  );
};

export default GameScoreboard;
