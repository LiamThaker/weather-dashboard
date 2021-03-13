var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const request = require('request');

const weatherData = (address, url, callback) => {


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if (!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

/* GET api listing. */
router.get('/', function (req, res, next) {
    res.json({
        message: "Hello /api route"
    })
});

//localhost:3001/weather?address=lahore
router.get('/weather', (req, res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: "You must enter address in search text box"
        })
    }

    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
    const SECRET_KEY = "3709f89e826c2838310e77a773533f2d";
    const url = BASE_URL + encodeURIComponent(address) + '&appid=' + SECRET_KEY;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (!data.main || !data.main.temp || !data.name || !data.weather) {
                res
                    .status(data.cod)
                    .send({
                        code: data.cod,
                        message: data.message,
                    })
            }
            else {
                const forecast = data.weather[0].description;
                const temperature = data.main.temp;
                const name = data.name;
                console.log(`Today's forecast for ${name}: ${forecast}`);
                console.log(`It's currently ${temperature}°C `);
                res.send({
                    forecast: forecast,
                    temperature: temperature,
                    name: name
                })

            }

        })
        .catch((error) => {
            console.log("Error:" + error)
            res.send(error)
        }
        );


    // weatherData(address, url, (error, { temperature, description, cityName } = {}) => {
    //     if (error) {
    //         return res.send({
    //             error
    //         })
    //     }
    //     console.log(temperature, description, cityName);
    //     res.send({
    //         temperature,
    //         description,
    //         cityName
    //     })
    // })
});

module.exports = router;
