import { useEffect, useState } from 'react';
import GameContent from './GameContent';
import GameScoreboard from './GameScoreboard';
import { getChampList } from '../helpers/DataFetcher';

const GameField = ({ gameVersion }) => {
  const [score, setScore] = useState(0);
  const [champions, setChamps] = useState([]);

  // fetch game champs list
  useEffect(() => {
    const getChamps = async function () {
      try {
        if (gameVersion && gameVersion !== '' && champions.length === 0) {
          const champs = await getChampList(gameVersion);
          setChamps(
            Object.values(champs.data).map((c) => {
              return { id: c.id, key: c.key, title: c.title };
            })
          );
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    getChamps();
  }, [gameVersion, champions.length]);

  // const list =
  //   champions.length > 0 ? (
  //     <ul>
  //       {champions.map((champ) => {
  //         return <li key={champ.key}>{champ.id}</li>;
  //       })}
  //     </ul>
  //   ) : (
  //     <div>Nothing</div>
  //   );

  return (
    <section className="play-field">
      <GameContent></GameContent>
      <GameScoreboard score={score}></GameScoreboard>
    </section>
  );
};

export default GameField;
