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
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of ' + body.currently.precipType + '.' )
    }
  })
}

module.exports = forecast;
