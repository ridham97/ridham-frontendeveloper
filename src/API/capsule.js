export const getSpaceData = () => {
  return fetch(`https://api.spacexdata.com/v3/capsules`);
};
