const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Ha Noi', (error, data) => {
    if (error) {
        console.log('Error', error);
    } else {
        console.log('Geocode:', data);
    }
});

forecast('Ha Noi', (error, data) => {
    if (error) {
        console.log('Error', error);
    } else {
        console.log('Weather:', data);
    }
});