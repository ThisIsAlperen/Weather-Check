const coordinates = new Coordinates();
const weather = new Weather();

var city = 'istanbul';

coordinates.getCoordinates(city)
.then(response=>{
    console.log(response.coordinates)
    var latitude = response.coordinates[0].lat
    var longitude = response.coordinates[0].lon 
    
    weather.getWeather(latitude,longitude).then(response=>{
        console.log(response.weather)
    })
})