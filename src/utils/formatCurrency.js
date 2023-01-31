import Trans from '@i18n/translation';

export const formatCurrency = (data, price) => {
  // regionRate use lng to detect the language. then extract the correct rate for USD or EUR
  const regionRate = Trans.currentLocale === 'en' ? 'rateUSD' : 'rateEUR';

  // if data is array then extract using position, if data is object then extract using key
  const exRate = Array.isArray(data)
    ? data[0].exchangeRates.rates[regionRate]
    : data.exchangeRates.rates[regionRate];

  // try to show correct currency symbol base on language
  const currency =
    Trans.currentLocale === 'vn'
      ? 'đ'
      : Trans.currentLocale === 'en'
      ? '$'
      : '€';

  // if lng is vn then show normal price else get the exchange rate for the price
  const lastPrice = Trans.currentLocale === 'vn' ? price : price / exRate;

  // print out the last sentence which is currency symbol and amount
  return `${currency} ${parseInt(lastPrice).toLocaleString('en-us')}`;
};
