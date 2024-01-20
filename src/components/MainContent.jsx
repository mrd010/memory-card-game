import GameContent from './GameContent';
import GameHeader from './GameHeader';
import GameScoreboard from './GameScoreboard';

const MainContent = () => {
  return (
    <main className="main">
      <GameHeader></GameHeader>
      <GameContent></GameContent>
      <GameScoreboard></GameScoreboard>
    </main>
  );
};

export default MainContent;
