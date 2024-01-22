import IconSvg from './helpers/IconSvg';

const GameHeader = () => {
  return (
    <section className="game-header">
      <h2 className="main-desc">Choose a champion that has not appeared before</h2>
      <div className="help-section">
        <div className="help-indicator">
          <IconSvg name="help"></IconSvg>
        </div>
        <div className="help-desc">
          <p>
            Each round shows you a set of league of legends champions. you should choose a champion
            and memorize it.{' '}
          </p>
          <p>
            in each round if you choose a champion whose not appeared before your score increases.
            and if you choose a champion whose appeared in previous rounds, its a game over!
          </p>
          <p>
            the game continues until all champions selected and obviously game maximum round is
            equal to number of champions
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameHeader;
