import IconSvg from './helpers/IconSvg';

const DataError = ({ onRetry }) => {
  return (
    <div className="error">
      <h2 className="title">Oops!</h2>
      <span className="desc">Sorry! Can&apos;t retrieve information from server. Try later</span>
      <button className="retry" onClick={onRetry}>
        <span className="button-text">Retry</span>
        <IconSvg name={'restart_alt'}></IconSvg>
      </button>
    </div>
  );
};

export default DataError;
