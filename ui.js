class UI {
    constructor() {
        this.weatherContainer = document.getElementById('weatherContainer')
    }

    showWeather(weather) {
        console.log(weather)
        this.weatherContainer.innerHTML = `
        <div class="card card-body">
                <div class="row">
                    <div id="left" class="col-md-3">
                        <img class="img-thumbnail" id="picture" src="" alt="">
                        <p>${String(weather.weather[0].description).capitalize()}</p>
                        <p>${Math.round(weather.main.temp - 273)} \xB0C</p>
                    </div>
                    <div id="right" class="col-md-9">
                        <h5>${weather.name}</h5>
                    </div>
                </div>
            </div>
        `
    }

    showPicture(picture) {
        this.weatherContainer.querySelector('#picture').setAttribute('src', picture)
    }

}

String.prototype.capitalize = function () {
    var total = this.toString().split(' ')
    var result = '';
    total.forEach(element => {
        var first = element.charAt().toUpperCase()

        element = element.split('')

        element.splice(0, 1, first)
        var word = ''
        element.forEach(letter => {
            word += letter
        })
        result += word+' ';
    })
    return result;

}