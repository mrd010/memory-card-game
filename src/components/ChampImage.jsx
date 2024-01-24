import { capitalize } from '../helpers/Utilities';

const ChampImage = ({ champName }) => {
  return (
    <>
      <img
        className="champ-picture"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`}
        alt={champName}
      />
    </>
  );
};

export default ChampImage;
