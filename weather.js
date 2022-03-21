class Weather{
    constructor(){
        this.clientid = '';
        this.clientSecret = '';
    }
    async getWeather(lat,lon){
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=304e44883edf2df5c0b047223c35dedf`)

        const weather = await weatherResponse.json();
       
        return{weather};
    }
}