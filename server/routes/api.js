var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const request = require('request');
const config = require('../config');

/* GET api listing. */
router.get('/', function (req, res, next) {
    res.json({
        message: "Hello /api route"

    })
});

//localhost:3001/weather?address=galway
router.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: "You must enter address in search text box"
        })
    }

    const url = config.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + config.openWeatherMap.SECRET_KEY;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (!data.main || !data.main.temp || !data.name || !data.weather) {
                res.send({
                    code: data.cod,
                    error: data.message,
                })
            }
            else {
                const forecast = data.weather[0].description;
                const temperature = data.main.temp;
                const pressure = data.main.pressure;
                const humidity = data.main.humidity;
                const name = data.name;
                const coords = data.coord;
                const wind = data.wind;

                // console.log(`Today's forecast for ${name}: ${forecast}`);
                // console.log(`It's currently ${temperature}°C `);
                res.send({
                    forecast: forecast,
                    temperature: temperature,
                    pressure: pressure,
                    humidity: humidity,
                    name: name,
                    coords: coords,
                    wind: wind
                });
            }
        })
        .catch((error) => {
            console.log("Error:" + error)
            res.send(error)
        }
        );

});

router.get('/test', async (req, res) => {
    res.json({ message: 'pass!' })
})

module.exports = router;
