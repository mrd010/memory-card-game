import ChampImage from './helpers/ChampImage';

const ChampCard = ({ champId, champTitle, isSelected, onSelect }) => {
  return (
    <button
      className={`champ-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(champId)}
    >
      <ChampImage champName={champId}></ChampImage>
      <div className="champ-title">
        <span className="name">{champId}</span>
        <span className="title">{champTitle}</span>
      </div>
    </button>
  );
};

export default ChampCard;
