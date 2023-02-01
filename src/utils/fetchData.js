import axios from 'axios';

const LOCAL_PREFIX = 'chd-travel-';

export const fetchData = async cacheKey => {
  const URL = `http://localhost:3000/${cacheKey}`;
  const cachedData = localStorage.getItem(LOCAL_PREFIX + cacheKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    if (new Date(parsedData.timestamp) > oneDayAgo) {
      console.log('Use localStorage data');
      return parsedData.data;
    }
  }

  const { data } = await axios.get(URL);
  console.log('API call');

  localStorage.setItem(
    LOCAL_PREFIX + cacheKey,
    JSON.stringify({
      data,
      timestamp: new Date(),
    })
  );
  return data;
};
