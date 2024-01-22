import { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import './css/App.scss';
import { getCurrentVersion } from './helpers/DataFetcher';
import Loading from './components/Loading';

function App() {
  const [version, setVersion] = useState('');
  const [currentGameSession, setGameSession] = useState(0);
  const [fetchTries, setFetchTries] = useState(0);

  console.log('render');
  const handleNewGameSession = () => {
    setGameSession(currentGameSession + 1);
  };

  // fetch game version first
  useEffect(() => {
    let ignore = false;
    const getVersion = async function () {
      try {
        const curVer = await getCurrentVersion();
        if (!ignore) {
          setVersion(curVer);
        }
      } catch (e) {
        console.error(e.message);
        setFetchTries(fetchTries + 1);
      }
    };

    if (fetchTries < 10) {
      getVersion();
    }
    return () => {
      ignore = true;
    };
  }, [fetchTries]);

  // if is loading display loading
  // display content after loading
  const content =
    version === '' ? (
      <Loading forWho="main"></Loading>
    ) : (
      <MainContent gameVersion={version} gameSession={currentGameSession}></MainContent>
    );

  return (
    <>
      <Header onRestart={handleNewGameSession}></Header>
      {content}
    </>
  );
}

export default App;
