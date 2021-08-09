// Setup empty JS object to act as endpoint for all routes
projectData = {};

const path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())

//console.log('Geonames username is ${genonames_id}, Weatherbit API key is ${weatherbit_id}, and Pixabay API key is ${pixabay_id}`);

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DECLARING THE PORT
const port = 8081;
const server = app.listen(port, () => {
    //log text in console for evidence that servers are working
    console.log ("server is running");
    console.log (`running on localhost: ${port}`);
});

//generate dist file location
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
});

app.get('/all', (req, res) => {
    res.send(projectData);
    console.log(projectData);
});

app.post('/add', (req, res) => {
  travelData = {
    destinationLattitude: req.body.destinationLattitude,
    destinationLongitude: req.body.destinationLongitude,
    destinationCountry: req.body.destinationCountry,
    destinationLow_temp: req.body.destinationLow_temp,
    destinationLow_temp: req.body.destinationHigh_temp,
    weatherDescription: req.body.weatherDescription,
    destinationImage: req.body.destinationImage,
  };

  projectData = travelData;
  res.send(projectData);

  //testing
  console.log(projectData);
});

module.exports = app;
