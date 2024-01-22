import IconSvg from './helpers/IconSvg';

const RestartBtn = ({ onClick }) => {
  return (
    <button className="restart-button" onClick={onClick}>
      <span>Restart</span>
      <IconSvg name={'restart_alt'}></IconSvg>
    </button>
  );
};

export default RestartBtn;
