const request = require('request');

const apiToken = 'pk.eyJ1IjoiNTAwcGluZyIsImEiOiJja3BkajFzMTkwY2x0MnZ0NmFtaXM5ZjZlIn0.5XPV1VpIOPqneaF46fz1jw';

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + apiToken;

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[0],
                lon: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;