const GameOverScreen = ({ score, maxScore }) => {
  let gameOverTitle;
  let gameOverMessage;
  if (score / maxScore === 1) {
    gameOverTitle = 'You are a genius!';
    gameOverMessage =
      'You have an amazing memory that can impress anyone. You should be proud of yourself!';
  } else if (score / maxScore > 0.85) {
    gameOverTitle = 'You are a smartypants!';
    gameOverMessage =
      'ou did very well in the game. You have a great memory that can help you in many situations. You should be happy with yourself!';
  } else if (score / maxScore > 0.6) {
    gameOverTitle = 'You are a memory snoozer!';
    gameOverMessage =
      'You did okay in the game. You have an average memory that can get you by. You should be satisfied with yourself!';
  } else if (score / maxScore > 0.3) {
    gameOverTitle = 'You are a forgetful!';
    gameOverMessage =
      'You did poorly in the game. You have a weak memory that can cause you trouble. You should be disappointed with yourself!';
  } else {
    gameOverTitle = 'You are a goldfish!';
    gameOverMessage =
      'You failed the game miserably. You have a terrible memory that can make you lose everything. You should be ashamed of yourself!';
  }

  return (
    <div className="game-over">
      <h3 className="game-over-title">{gameOverTitle}</h3>
      <p className="game-over-message">{gameOverMessage}</p>
      <div className="game-over-score">
        <span className="title">Score</span>
        <span className="score">{score}</span>
        <span className="separator">/</span>
        <span className="max">{maxScore}</span>
      </div>
    </div>
  );
};

export default GameOverScreen;
