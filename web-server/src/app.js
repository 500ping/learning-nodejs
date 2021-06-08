const express = require('express');
const path = require('path');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const port = 3000;

// Define Paths For Express Config
const publicDIR = path.join(__dirname, '../public');
const viewsDIR = path.join(__dirname, '../templates/views');
const partialsDIR = path.join(__dirname, '../templates/partials');

// Setup Handlebars Engine And Views Location
app.set('view engine', 'hbs');
app.set('views', viewsDIR);
hbs.registerPartials(partialsDIR);

// Setup Static Directory
app.use(express.static(publicDIR));

const myName = 'Thang Nguyen';

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: myName
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: myName
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    };

    geocode(req.query.address, (error, {location} = {}) => {
        if (error) {
            return res.send({
                error: error
            });
        };

        forecast(location, (error, data) => {
            if (error) {
                return res.send({
                    error: error
                })
            };

            console.log(data);

            res.send({
                forecast: data,
                address: location
            })
        });
    });

    // res.send({
    //     forecast: 'It is raining',
    //     location: 'Ha Noi',
    //     address: req.query.address
    // });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        });
    };

    res.send({
        products: []
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: myName
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Article Not Found',
        name: myName
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: '404 Not Found',
        name: myName
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

