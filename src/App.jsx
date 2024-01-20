import { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import Header from './components/header';
import './css/App.scss';
import { getCurrentVersion } from './helpers/DataFetcher';

function App() {
  const [version, setVersion] = useState('');

  // fetch game version first
  useEffect(() => {
    const getVersion = async function () {
      try {
        if (version == '') {
          const curVer = await getCurrentVersion();
          setVersion(curVer);
        }
      } catch (e) {
        console.error(e.message);
      }
    };

    getVersion();
  }, [version]);

  return (
    <>
      <Header></Header>
      <MainContent gameVersion={version}></MainContent>
    </>
  );
}

export default App;
