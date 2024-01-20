import { useState } from 'react';
import GameContent from './GameContent';
import GameScoreboard from './GameScoreboard';

const GameField = () => {
  const [score, setScore] = useState(0);
  return (
    <section className="play-field">
      <GameContent></GameContent>
      <GameScoreboard score={score}></GameScoreboard>
    </section>
  );
};

export default GameField;
