import { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import Header from './components/header';
import './css/App.scss';
import { getCurrentVersion } from './helpers/DataFetcher';
import Loading from './components/Loading';

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

  // if is loading display loading
  // display content after loading
  const content =
    version === '' ? (
      <Loading forWho="main"></Loading>
    ) : (
      <MainContent gameVersion={version}></MainContent>
    );

  return (
    <>
      <Header></Header>
      {content}
    </>
  );
}

export default App;
