const express = require('express');
const path = require('path');

const app = express();

const port = 3000;
const publicDIR = path.join(__dirname, '../public');
const viewsDIR = path.join(__dirname, '../views');

app.set('view engine', 'hbs');
app.set('views', viewsDIR);
app.use(express.static(publicDIR));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Thang Nguyen'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

