const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('HaNoi', (error, {location}) => {
    if (error) {
        console.log('Error', error);
    } 

    forecast(location, (error, data) => {
        if (error) {
            console.log('Error', error);
        } else {
            console.log('Location:', location);
            console.log('Weather:', data);
        }
    });
});