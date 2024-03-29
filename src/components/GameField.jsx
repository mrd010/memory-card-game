import { useEffect, useRef, useState } from 'react';
import GameScoreboard from './GameScoreboard';
import { shuffle, getRandomItems } from '../helpers/Utilities';
import GameOverScreen from './GameOverScreen';
import ChampCard from './ChampCard';

let randomChamps = [];

const GameField = ({ chosenChamps, imagesLoaded }) => {
  const [selectedBeforeChamps, setSelectedBeforeChamps] = useState([]);
  const [gameStatus, setGameStatus] = useState('not started');

  const btnContainer = useRef(null);

  const correctRandomChamps = (randomChampsArray) => {
    if (randomChampsArray.length > 0) {
      let lastItem = randomChampsArray[randomChampsArray.length - 1];
      if (randomChampsArray.every((champ) => selectedBeforeChamps.includes(champ))) {
        // 1. an array of not selected before champs
        const notSelectedBeforeChamps = chosenChamps.filter(
          (champ) => !selectedBeforeChamps.includes(champ)
        );
        // 2. a random champ for not selected array
        lastItem = getRandomItems(notSelectedBeforeChamps).at(0);
      }
      return [...randomChampsArray.slice(0, -1), lastItem];
    }
    return randomChampsArray;
  };

  if (gameStatus === 'not started') {
    randomChamps = ['', '', '', ''];
    if (chosenChamps.length > 0) {
      setGameStatus('started');
    }
  } else if (gameStatus === 'started') {
    randomChamps = shuffle(correctRandomChamps(getRandomItems(chosenChamps, 4)));
  }

  const handleCardSelect = (champId) => {
    if (gameStatus === 'started') {
      if (selectedBeforeChamps.includes(champId)) {
        setGameStatus('ended');
      } else {
        setSelectedBeforeChamps([...selectedBeforeChamps, champId]);
        if (selectedBeforeChamps.length === chosenChamps.length - 1) {
          setGameStatus('ended');
        }
      }
    }
  };

  useEffect(() => {
    if (gameStatus === 'ended' || selectedBeforeChamps.length > 0) {
      btnContainer.current.style.opacity = '1';
    }
  }, [selectedBeforeChamps.length, gameStatus]);

  // game over screen
  const gameOverScreen =
    gameStatus === 'ended' ? (
      <GameOverScreen
        score={selectedBeforeChamps.length}
        maxScore={chosenChamps.length}
      ></GameOverScreen>
    ) : null;

  return (
    <section className="play-field">
      <div
        className="cards-container"
        ref={btnContainer}
        style={{ opacity: `${imagesLoaded ? '1' : '0'}`, transitionDuration: '0.2s' }}
      >
        {randomChamps.map((champ, index) => {
          return (
            <button
              key={index}
              className={`card-button`}
              onClick={() => {
                btnContainer.current.style.opacity = '0';
                setTimeout(() => {
                  handleCardSelect(champ);
                }, 200);
              }}
              disabled={gameStatus !== 'started'}
            >
              <ChampCard
                key={champ}
                champName={champ}
                gameIsEnded={gameStatus === 'ended'}
              ></ChampCard>
            </button>
          );
        })}
        {gameOverScreen}
      </div>

      <GameScoreboard
        score={selectedBeforeChamps.length}
        gameIsEnded={gameStatus === 'ended'}
      ></GameScoreboard>
    </section>
  );
};

export default GameField;
