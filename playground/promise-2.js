const request = require('request')
var geocodeAddress = (encodedAddress) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCaaEtwMNPFKCAVXrzf1c7Tnzt-le0HOug`,
            json: true,
        },(error, response, body) => {
    
            if(error) {
                reject('Unable to connect to Google Servers.');
            }
            else if(body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.')
            }
            else if(body.status === 'OK') {
                resolve({
                    address: `${body.results[0].formatted_address}`,
                    latitude: `${body.results[0].geometry.location.lat}`,
                    longitude: `${body.results[0].geometry.location.lng}`
                })
            }
        })
    })
}

geocodeAddress('pooja nilaya').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {

    console.log(error);
});