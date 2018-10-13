const request = require('request');

var getWeather = (lat,lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/80156465dde4000e82c725a7b22df6c6/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: `${body.currently.temperature}`,
                apparentTemperature: `${body.currently.apparentTemperature}`,
                uvIndex: `${body.currently.uvIndex}`
            });
        }
        else {
            callback('Unable to fetch weather');
        }
        
    })
};

module.exports.getWeather = getWeather;