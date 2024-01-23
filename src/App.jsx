import { useEffect, useRef, useState } from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import './css/App.scss';
import { getCurrentVersion } from './helpers/DataFetcher';
import MainLoading from './components/MainLoading';
import { getVersionCached, storageIsEmpty } from './helpers/LocalStorageController';
import DataError from './components/DataError';

function App() {
  const [version, setVersion] = useState('');
  const [currentGameSession, setGameSession] = useState(0);
  const [isOffline, setOfflineMode] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const cachedVersion = useRef(null);

  const handleNewGameSession = () => {
    setGameSession(currentGameSession + 1);
  };
  const retryConnect = () => {
    setIsFailed(false);
    setOfflineMode(false);
  };

  // fetch game version first
  useEffect(() => {
    let ignore = false;
    if (cachedVersion.current === null && !storageIsEmpty()) {
      cachedVersion.current = getVersionCached();
    }
    const getVersion = async function () {
      try {
        const lastVersion = await getCurrentVersion();
        if (!ignore) {
          if (cachedVersion.current === lastVersion) {
            setOfflineMode(true);
          } else {
            setVersion(lastVersion);
          }
        }
      } catch (e) {
        console.error(e.message);
        setOfflineMode(true);
      }
    };

    if (!isOffline) {
      getVersion();
    } else {
      if (cachedVersion.current !== null) {
        setVersion(cachedVersion.current);
      } else {
        setIsFailed(true);
      }
    }

    return () => {
      ignore = true;
    };
  }, [isOffline]);

  // if is loading display loading
  // display content after loading
  let content = null;
  if (isFailed) {
    content = <DataError onRetry={retryConnect}></DataError>;
  } else if (version === '') {
    content = <MainLoading></MainLoading>;
  } else {
    content = (
      <MainContent
        gameVersion={version}
        gameSession={currentGameSession}
        isOffline={isOffline}
      ></MainContent>
    );
  }

  return (
    <>
      <Header onRestart={handleNewGameSession}></Header>
      {content}
    </>
  );
}

export default App;
