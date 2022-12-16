export const getSpaceData = (limit = 10, offset = 0) => {
  return fetch(
    `https://api.spacexdata.com/v3/capsules?limit=${limit}&offset=${offset}`
  );
};
