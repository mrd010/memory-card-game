export const saveVersion = function saveVersion(gameVersion) {
  localStorage.setItem('version', JSON.stringify(gameVersion));
};
//############################################################################################################################################################
export const saveChampList = function saveChampList(championsList) {
  localStorage.setItem('champions', JSON.stringify(championsList));
};

//############################################################################################################################################################
export const getVersionCached = function getVersionCached() {
  const version = JSON.parse(localStorage.getItem('version'));
  return version;
};
//############################################################################################################################################################
export const getChampListCached = function getChampListCached() {
  const champions = JSON.parse(localStorage.getItem('champions'));
  return champions;
};

//############################################################################################################################################################
export function storageIsEmpty() {
  return localStorage.length ? false : true;
}
