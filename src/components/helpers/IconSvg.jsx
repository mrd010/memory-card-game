const IconSvg = ({ name }) => {
  const url = new URL(`../../assets/icons/${name}.svg`, import.meta.url).href;
  return <img src={url} alt="" />;
};

export default IconSvg;
