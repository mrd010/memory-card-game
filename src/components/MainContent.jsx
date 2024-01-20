import GameHeader from './GameHeader';
import GameField from './GameField';

const MainContent = ({ gameVersion }) => {
  return (
    <main className="main">
      <GameHeader></GameHeader>
      <GameField gameVersion={gameVersion}></GameField>
      <div className="game-version">
        <span className="desc">Synced with League of Legends v.</span>
        <span className="version">{gameVersion}</span>
      </div>
    </main>
  );
};

export default MainContent;
