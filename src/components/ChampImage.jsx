import { useContext, useEffect, useRef } from 'react';
import { capitalize } from '../helpers/Utilities';
import ImageLoadContext from './helpers/ImageLoadContext';

const ChampImage = ({ champName }) => {
  const imagesLoaded = useContext(ImageLoadContext);

  const r = useRef(null);
  useEffect(() => {
    if (imagesLoaded) {
      r.current.style.opacity = '1';
    }
  }, [imagesLoaded]);

  const imageLoader = !imagesLoaded ? <div className="image-loader"></div> : null;

  return (
    <>
      <img
        className="champ-picture"
        ref={r}
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${capitalize(champName)}_0.jpg`}
        alt={champName}
        style={{ opacity: '0' }}
      />
      {imageLoader}
    </>
  );
};

export default ChampImage;
