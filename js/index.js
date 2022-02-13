const d = document;
const $body = d.getElementById('body');

let card = d.createElement('section'),
container = d.createElement('section');
$body.insertAdjacentElement('afterbegin',container);

styleContainer();

function getLocalization(position) {
    let crd = position.coords;
    getWeather(crd.latitude, crd.longitude);
}

const getCountry =  ()=>{

    
    $.ajax({
        type: "GET",
        url: `http://battuta.medunes.net/api/country/all/?key=${apiKeyBattuta}`,
        dataType: "jsonp",
        success:  function (res) {
             country(res);
             
        }
    });
    

}


const getWeather = async (lat, lon)=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp,es&appid=${apiKey}`)
    let json = await res.json();

     dayNigth(json);
     styleBody();
     createCard(json);
}


function createCard(res) {
    
    let icon = d.createElement('img'),
    titleDescription = d.createElement('h3'),
    divCountry = d.createElement('div'),
    titleCountry = d.createElement('h3'),
    subtitleCountry = d.createElement('span');
    
    container.appendChild(card);
    
    insertIcon(res, icon, titleDescription, card);

    card.appendChild(divCountry);
    
    divCountry.appendChild(subtitleCountry);
    divCountry.appendChild(titleCountry);

    
    titleCountry.textContent = res.name;
    subtitleCountry.textContent = 'Ciudad: ';
    let titleTemp = d.createElement('h3');
    titleTemp.textContent = 'Temperatura';
    
    card.appendChild(titleTemp);
    let divTemp = d.createElement('div'),
    subDivTemp = d.createElement('div'),
    imgTemp = d.createElement('img'),
    h4Temp = d.createElement('h4'),
    subDivMinMax = d.createElement('div'),
    tempMin = d.createElement('h5'),
    tempMax = d.createElement('h5'),
    feelsLike = d.createElement('h5');

    card.appendChild(divTemp);
    
    divTemp.appendChild(subDivTemp);
    divTemp.appendChild(subDivMinMax);
    
    subDivTemp.appendChild(imgTemp);
    subDivTemp.appendChild(h4Temp);
    imgTemp.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/thermometer.svg';
    
    h4Temp.textContent = `${res.main.temp}°C`;
    subDivMinMax.appendChild(tempMin);
    subDivMinMax.appendChild(tempMax);
    subDivMinMax.appendChild(feelsLike);
    

    tempMin.textContent= `Temp. Min. ${res.main.temp_min}°C`;
    tempMax.textContent= `Temp. Max. ${res.main.temp_max}°C`;
    feelsLike.textContent = `Sens. Term. ${res.main.feels_like}°C`
    
    let titleWind = d.createElement('h3');
    titleWind.textContent = 'Viento';
    titleWind.style.textAlign = 'center';
    card.appendChild(titleWind)

    let divWind = d.createElement('div'),
    imgWind = d.createElement('img'),
    h4Wind = d.createElement('h4');

   
    card.appendChild(divWind);
    

   
    imgWind.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/wind.svg';
    
    h4Wind.textContent = `Rachas de viento ${res.wind.speed} km/h`
    divWind.appendChild(imgWind);
    divWind.appendChild(h4Wind);

    styleCard(card, divCountry, titleCountry,titleTemp,divTemp,subDivTemp,imgTemp,divWind, imgWind);
} 

async function startMenu() {

    await navigator.geolocation.getCurrentPosition(getLocalization);
    await getCountry();
}


d.addEventListener('DOMContentLoaded', (e)=>{
    
    
    
    if (navigator.geolocation) {
        
        startMenu();
        
    } else {
        let select = d.querySelector('select').value;
        
        getWeatherSelect(select);
    }

    
    
})
d.addEventListener('change', (e)=>{
    if(e.target.matches('select')){
        
        let select = d.querySelector('select').value;
        while (card.hasChildNodes()) {
            card.removeChild(card.lastChild);
        }
        getWeatherSelect(select);
    }
})

const getWeatherSelect = async (select)=>{
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select}&units=metric&lang=sp,es&appid=${apiKey}`)
    let json = await res.json();

    
    dayNigth(json);
    styleBody();
    createCard(json);
}
window.addEventListener('resize',(e)=>{
    if (media.matches) {
        card.style.width = '80vw';
    }
    if (!media.matches) {
        card.style.width = '55vw';
    }
    console.log('hola');
})
// BABOK

