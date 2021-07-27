import getDailyChartForSymbol from '../API';

async function fetchStockData() {
  const result = await getDailyChartForSymbol();
  let resultParsed = JSON.parse(result);

  function formatStockData(val) {
    return Object.entries(val).map(entries => {
      const [date, priceData] = entries;
      // console.log(date.slice(8, 10));
      return {
        date,
        day: date.slice(8, 10),
        open: Number(priceData['1. open']),
        high: Number(priceData['2. high']),
        low: Number(priceData['3. low']),
        close: Number(priceData['4. close']),
      };
    });
  }
  // console.log('19', formatStockData(resultParsed['Time Series (Daily)']));

  return formatStockData(resultParsed['Time Series (Daily)']);
}

export default fetchStockData;
