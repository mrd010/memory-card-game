const GameOverScreen = ({ isWin }) => {
  if (isWin) {
    return <div className="game-over win-screen">congrats</div>;
  } else return <div className="game-over lose-screen">sorry</div>;
};

export default GameOverScreen;
