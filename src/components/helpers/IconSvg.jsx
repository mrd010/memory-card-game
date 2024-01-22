const IconSvg = ({ name }) => {
  const url = new URL(`../../assets/icons/${name}.svg`, import.meta.url).href;
  return <img src={url} alt="" className="icon" />;
};

export default IconSvg;
