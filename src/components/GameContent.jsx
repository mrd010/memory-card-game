import { useState } from 'react';
import ChampCard from './ChampCard';

const GameContent = ({ champions, onChampSelect }) => {
  const [selected, setSelected] = useState('');

  const handleCardClick = (champId) => {
    setSelected(champId);
    onChampSelect(champId);
  };

  return (
    <div className="game-content">
      {champions.map((champ) => {
        return (
          <ChampCard
            champId={champ.id}
            champTitle={champ.title}
            key={champ.id}
            isSelected={selected === champ.id}
            onSelect={handleCardClick}
          ></ChampCard>
        );
      })}
    </div>
  );
};

export default GameContent;
