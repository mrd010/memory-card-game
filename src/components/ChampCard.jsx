import ChampImage from './helpers/ChampImage';

const ChampCard = ({ champName }) => {
  return (
    <div className="card-content">
      <ChampImage champName={champName}></ChampImage>
      <div className="champ-title">
        <span className="name">{champName}</span>
      </div>
    </div>
  );
};

export default ChampCard;
