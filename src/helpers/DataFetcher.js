export const getCurrentVersion = async function getCurrentVersion() {
  const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', {
    mode: 'cors',
  });
  if (!response.ok) {
    throw new Error(`Can't get game version. Error:${response.status}`);
  }

  // convert to json
  const versionData = await response.json();
  return versionData[0];
};

export const getChampList = async function getChampList(version) {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`,
    {
      mode: 'cors',
    }
  );
  if (!response.ok) {
    throw new Error(`Can't get champ list. Error:${response.status}`);
  }

  // convert to json
  const champList = await response.json();
  return champList;
  //   return versionData[0];
};
