import GameHeader from './GameHeader';
import GameField from './GameField';
import { useEffect, useState } from 'react';
import { getChampList } from '../helpers/DataFetcher';
import { getRandomItems } from '../helpers/Utilities';

const n = 10;

const MainContent = ({ gameVersion }) => {
  const [gameSessionCount, setGameSessionCount] = useState(0);
  const [champions, setChamps] = useState([]);
  const [fetchTries, setFetchTries] = useState(0);

  // console.log(gameVersion);

  useEffect(() => {
    const getChamps = async function () {
      try {
        // if got game latest version
        if (gameVersion !== undefined && gameVersion !== '') {
          const champs = await getChampList(gameVersion);
          // convert champs data object to array of champs
          const champsArray = Object.values(champs.data);
          // choose n random champs for using in game session
          setChamps(champsArray.map((champ) => champ.id));
        }
      } catch (e) {
        console.error(e.message);
        setFetchTries(fetchTries + 1);
      }
    };

    if (fetchTries < 10) {
      getChamps();
    }
  }, [gameVersion, fetchTries]);

  // select n random champions for using in game session
  const randomChamps = getRandomItems(champions, n);

  return (
    <main className="main">
      <GameHeader></GameHeader>
      <GameField key={gameSessionCount} chosenChamps={randomChamps}></GameField>
      <div className="game-version">
        <span className="desc">Synced with League of Legends v.</span>
        <span className="version">{gameVersion}</span>
      </div>
    </main>
  );
};

export default MainContent;
