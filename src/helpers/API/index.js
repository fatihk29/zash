// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key

function ApiFromAlphaAvantage(
  symbol = 'IBM',
  interval = '60min',
  slice = 'year1month2',
  TIME_SERIES_OPTION = '',
) {
  let url_1 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=${interval}&slice=${slice}&apikey=Y46IPAA3QEBI2XNU`;

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url_1, true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject('ERR:' + this.status);
        }
      }
    };
    xhr.send();
  });
}

let prms = ApiFromAlphaAvantage();
prms
  .then((val, id) => {
    // console.log(val);
  })
  .catch(err => {
    console.log(err);
  });

export default ApiFromAlphaAvantage;
