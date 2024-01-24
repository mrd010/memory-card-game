import GameHeader from './GameHeader';
import GameField from './GameField';
import { useEffect, useState } from 'react';
import { getChampList } from '../helpers/DataFetcher';
import { capitalize, getRandomItems } from '../helpers/Utilities';
import { getChampListCached, saveChampList, saveVersion } from '../helpers/LocalStorageController';
import MainLoading from './MainLoading';

const n = 25;
let randomChamps = [];

const MainContent = ({ gameVersion, gameSession, isOffline }) => {
  const [champions, setChamps] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
  randomChamps = getRandomItems(champions, n);
  useEffect(() => {
    setImagesLoaded(false);
  }, [gameSession]);

  useEffect(() => {
    if (!imagesLoaded) {
      const getImgSrc = (champName) =>
        `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`;
      const imageSrcList = randomChamps.map((champName) => getImgSrc(champName));
      const loadImage = (imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = imageSrc;
          img.onload = () => {
            setTimeout(() => {
              console.log(img);
              resolve(imageSrc);
            }, 2000);
          };
          img.onerror = (err) => reject(err);
        });
      };

      if (champions.length > 0) {
        Promise.all(imageSrcList.map((imageSrc) => loadImage(imageSrc)))
          .then(() => {
            console.log('loaded');
            setImagesLoaded(true);
          })
          .catch((err) => console.log('failed to load', err));
      }
    }
  }, [champions.length, imagesLoaded]);

  return (
    <main className="main">
      <GameHeader></GameHeader>
      {!imagesLoaded ? (
        <MainLoading></MainLoading>
      ) : (
        <GameField
          key={gameSession}
          chosenChamps={randomChamps}
          imagesLoaded={imagesLoaded}
        ></GameField>
      )}
      <div className="game-version">
        <span className="desc">Synced with League of Legends </span>
        <span className="version">{`v.${gameVersion}`}</span>
      </div>
    </main>
  );
};

export default MainContent;
