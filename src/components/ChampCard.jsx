import ChampImage from './helpers/ChampImage';

const ChampCard = ({ champName }) => {
  return (
    <>
      <ChampImage champName={champName}></ChampImage>
      <div className="champ-title">
        <span className="name">{champName}</span>
      </div>
    </>
  );
};

export default ChampCard;
