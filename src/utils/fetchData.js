import sanityClient from '../sanityClient';

const LOCAL_PREFIX = 'chd-travel-';

export const fetchData = async databaseName => {
  const cacheKey = databaseName === 'daily' ? 'tourDaily' : 'tourCentral';
  const cachedData = localStorage.getItem(LOCAL_PREFIX + cacheKey);
  const staleTimeMins = 20;
  const staleTimeHours = 0;

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const cachedTime = new Date(
      new Date().getTime() -
        (staleTimeHours === 0 ? 1 : staleTimeHours) * staleTimeMins * 60 * 1000
    );
    if (new Date(parsedData.timestamp) > cachedTime) {
      // console.log('Stale data');
      return parsedData.data;
    }
  }

  const data = await sanityClient.fetch(`*[_type == '${[cacheKey]}']{
		coverImg,
		tourSlug,
		tourDuration,
		tourHighlights[]->{
    'highlights': tourHighlights
    },
		tourID,
		tourIncludes ->{
 		 'includes':	tourIncludes
		},
		exchangeRates ->{
			rates
		},
		tourIntro,
		tourName,
		tourPrice,
		tourItinerary,
	}`);
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
