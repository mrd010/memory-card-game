import logo from '../assets/img/LoL_Logo_Flat_GOLD.png';
import RestartBtn from './RestartBtn';

const Header = ({ onRestart }) => {
  return (
    <header className="app-header">
      <img src={logo} alt="App Logo" className="header-logo" />
      <h1 className="header-title">CHARACTER MEMORY GAME</h1>
      <RestartBtn onConfirmRestart={onRestart}></RestartBtn>
    </header>
  );
};

export default Header;
