import axios from 'axios';

export const fetchData = async name => {
  const URL = `http://localhost:3000/${name}`;
  try {
    const data = await axios.get(URL);
    return data;
  } catch (e) {
    console.log('Fetch API error ', e.message);
  }
};
