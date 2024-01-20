const GameScoreboard = ({ score }) => {
  return (
    <section className="game-scoreboard">
      <h3 className="score">Your Score : {score}</h3>
    </section>
  );
};

export default GameScoreboard;
