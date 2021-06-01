const request = require('request');

const apiKey = '8cef174a3fa1b0321d937cecb94f5dbe';

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=' + apiKey + '&query=' + address;

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable To Connect To Weather Service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            const weatherData = body.current;
            const temperature = weatherData.temperature;
            const feelsLike = weatherData.feelslike;
            callback(undefined, 'It is currently ' + temperature + ' degrees out. It\'s feels like ' + feelsLike + ' degrees out.');
        }
    });
};

module.exports = forecast;