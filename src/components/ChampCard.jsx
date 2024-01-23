import ChampImage from './ChampImage';

const ChampCard = ({ champName, gameIsEnded, onImageLoad }) => {
  const visibilityStatus = gameIsEnded ? 'hidden' : 'visible';

  return (
    <div className="card-content">
      <ChampImage champName={champName} onLoad={onImageLoad}></ChampImage>
      <div className="champ-title" style={{ display: `${champName === '' ? 'none' : 'block'}` }}>
        <span className="name" style={{ visibility: visibilityStatus }}>
          {champName}
        </span>
      </div>
    </div>
  );
};

export default ChampCard;
