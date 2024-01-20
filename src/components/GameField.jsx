import { useEffect, useState } from 'react';
import GameContent from './GameContent';
import GameScoreboard from './GameScoreboard';
import { getChampList } from '../helpers/DataFetcher';
import Loading from './Loading';
import { uniqueRandomNumbers } from '../helpers/Utilities';

const GameField = ({ gameVersion }) => {
  const [score, setScore] = useState(0);
  const [champions, setChamps] = useState([]);

  const handleCardSelect = (champId) => {
    if (!champions.find((champ) => champ.id === champId).selectedBefore) {
      setScore(score + 1);
      setChamps(
        champions.map((champ) => {
          if (champ.id === champId) {
            return { ...champ, selectedBefore: true };
          }
          return champ;
        })
      );
    }
  };

  // fetch game champs list
  useEffect(() => {
    const getChamps = async function () {
      try {
        if (gameVersion && gameVersion !== '' && champions.length === 0) {
          const champs = await getChampList(gameVersion);

          const champsArray = Object.values(champs.data);
          const randomNumbers = uniqueRandomNumbers(10, champsArray.length);
          setChamps(
            randomNumbers.map((index) => {
              const c = champsArray[index];
              return { id: c.id, title: c.title, key: c.key, selectedBefore: false };
            })
          );
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    getChamps();
  }, [gameVersion, champions.length]);

  // select 4 random unique champions
  let randomChamps = [];
  if (champions.length > 0) {
    const randomIndexes = uniqueRandomNumbers(4, champions.length);
    randomChamps = randomIndexes.map((index) => champions[index]);
    // make sure at least one champ is not selected before
    if (randomChamps.every((champ) => champ.selectedBefore)) {
      randomChamps.pop();
      const nonSelectedChamps = champions.filter((champ) => !champ.selectedBefore);
      const randomChamp = nonSelectedChamps.at(
        Math.floor(Math.random() * nonSelectedChamps.length)
      );
      randomChamps.push(randomChamp);
    }

    // shuffle random champs
    randomChamps.sort((a, b) => a.key - b.key);
  }

  // if champ list not loaded show loading
  const content =
    champions.length > 0 ? (
      <GameContent champions={randomChamps} onChampSelect={handleCardSelect}></GameContent>
    ) : (
      <Loading forWho="game"></Loading>
    );

  return (
    <section className="play-field">
      {content}
      <GameScoreboard score={score}></GameScoreboard>
    </section>
  );
};

export default GameField;
