import { capitalize } from '../../helpers/Utilities';
import Loading from '../Loading';

const ChampImage = ({ champName }) => {
  if (champName === '') {
    return <Loading forWho={'image'}></Loading>;
  }
  return (
    <div className="image">
      <img
        className="champ-picture"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`}
        alt={champName}
      />
    </div>
  );
};

export default ChampImage;
