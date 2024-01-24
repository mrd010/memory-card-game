import { useEffect, useRef, useState } from 'react';
import { capitalize } from '../helpers/Utilities';

const ChampImage = ({ champName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const r = useRef(null);
  useEffect(() => {
    if (isLoaded) {
      r.current.style.opacity = '1';
    }
  }, [isLoaded]);

  const imageLoader = !isLoaded ? <div className="image-loader"></div> : null;
  const imgSrc =
    champName !== ''
      ? `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`
      : '';

  return (
    <>
      <img
        className="champ-picture"
        ref={r}
        src={imgSrc}
        alt={champName}
        style={{ opacity: '0' }}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      {imageLoader}
    </>
  );
};

export default ChampImage;
