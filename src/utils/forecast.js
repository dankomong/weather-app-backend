const request = require('request');

const forecast = (lat, long, callback) => {
  const url = 'https://api.darksky.net/forecast/e89edb594613a00de5aeda7c595cb92a/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather services!')
    }
    else if (body.error) {
      callback('Unable to find location.')
    }
    else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.')
    }
  })
}

module.exports = forecast;
