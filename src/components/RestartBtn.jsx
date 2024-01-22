import { useState } from 'react';
import IconSvg from './helpers/IconSvg';

const RestartBtn = ({ onConfirmRestart }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="buttons">
      <button
        className={`restart-button ${opened ? 'active' : ''}`}
        onClick={() => setOpened(!opened)}
      >
        <span className="button-text">Restart</span>
        <IconSvg name="restart_alt"></IconSvg>
      </button>
      <div className={`confirm-buttons ${opened ? 'open' : ''}`}>
        <button
          className="yes"
          onClick={() => {
            onConfirmRestart();
            setOpened(false);
          }}
        >
          Yes
        </button>
        <button className="no" onClick={() => setOpened(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default RestartBtn;
