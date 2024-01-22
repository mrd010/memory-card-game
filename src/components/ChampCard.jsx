import ChampImage from './helpers/ChampImage';

const ChampCard = ({ champName, gameIsEnded }) => {
  const visibilityStatus = gameIsEnded ? 'hidden' : 'visible';
  return (
    <div className="card-content">
      <ChampImage champName={champName}></ChampImage>
      <div className="champ-title">
        <span className="name" style={{ visibility: visibilityStatus }}>
          {champName}
        </span>
      </div>
    </div>
  );
};

export default ChampCard;
