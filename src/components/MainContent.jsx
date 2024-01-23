import GameHeader from './GameHeader';
import GameField from './GameField';
import { useEffect, useState } from 'react';
import { getChampList } from '../helpers/DataFetcher';
import { getRandomItems } from '../helpers/Utilities';
import { getChampListCached, saveChampList, saveVersion } from '../helpers/LocalStorageController';

const n = 10;

const MainContent = ({ gameVersion, gameSession, isOffline }) => {
  const [champions, setChamps] = useState([]);

  useEffect(() => {
    const getChamps = async function () {
      try {
        // if got game latest version
        if (gameVersion !== undefined && gameVersion !== '') {
          const champs = await getChampList(gameVersion);
          // convert champs data object to array of champs
          const champsArray = Object.values(champs.data).map((champ) => champ.id);
          // choose n random champs for using in game session
          saveVersion(gameVersion);
          saveChampList(champsArray);
          setChamps(champsArray);
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    if (!isOffline) {
      getChamps();
    } else {
      const champList = getChampListCached();
      setChamps(champList);
    }
  }, [gameVersion, isOffline]);

  // select n random champions for using in game session
  const randomChamps = getRandomItems(champions, n);

  return (
    <main className="main">
      <GameHeader></GameHeader>
      <GameField key={gameSession} chosenChamps={randomChamps}></GameField>
      <div className="game-version">
        <span className="desc">Synced with League of Legends </span>
        <span className="version">{`v.${gameVersion}`}</span>
      </div>
    </main>
  );
};

export default MainContent;
