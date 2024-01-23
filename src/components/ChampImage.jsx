import { useState } from 'react';
import { capitalize } from '../helpers/Utilities';

const ChampImage = ({ champName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageLoader = !isLoaded ? <div className="image-loader"></div> : null;
  return (
    <>
      {imageLoader}
      <img
        className="champ-picture"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`}
        alt={champName}
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};

export default ChampImage;
