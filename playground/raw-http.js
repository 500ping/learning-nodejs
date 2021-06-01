const https = require('https');

const apiToken = 'pk.eyJ1IjoiNTAwcGluZyIsImEiOiJja3BkajFzMTkwY2x0MnZ0NmFtaXM5ZjZlIn0.5XPV1VpIOPqneaF46fz1jw';
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hanoi.json?access_token=' + apiToken;


const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body.features[0]);
    });
});

Request.on('error', (error) => {
    console.log(error);
})

request.end();