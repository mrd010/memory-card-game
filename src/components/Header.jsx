import logo from '../assets/img/LoL_Logo_Flat_GOLD.png';
import IconSvg from './helpers/IconSvg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="App Logo" className="header-logo" />
      <h1 className="header-title">CHARACTER MEMORY GAME</h1>
      <button className="header-button restart-button">
        <span>Restart</span>
        <IconSvg name={'restart_alt'}></IconSvg>
      </button>
    </header>
  );
};

export default Header;
