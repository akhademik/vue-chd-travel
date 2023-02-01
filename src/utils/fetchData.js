import sanityClient from '../sanityClient';

const LOCAL_PREFIX = 'chd-travel-';

export const fetchData = async cacheKey => {
  const cachedData = localStorage.getItem(LOCAL_PREFIX + cacheKey);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const oneDayAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    if (new Date(parsedData.timestamp) > oneDayAgo) {
      console.log('Use localStorage data');
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
