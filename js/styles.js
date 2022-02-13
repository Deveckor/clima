let media = window.matchMedia('(max-width: 579px)');

function styleCard(card, divCountry, titleCountry,titleTemp,divTemp,subDivTemp,imgTemp,divWind, imgWind){
    // card.style.height = '70vh';
    
    
    card.style.display = 'flex';
    card.style.justifyContent = 'center';
    card.style.flexDirection = 'column';
    card.style.background = 'white';
    card.style.borderRadius = '15px';
    card.style.border = 'solid 0.5px';
    card.style.marginTop = '40px';
    card.style.padding = '20px'

    
    divCountry.style.display = 'flex';
    divCountry.style.display = 'flex';
    divCountry.style.flexDirection = 'column';
    divCountry.style.alignItems = 'center'
    divCountry.style.borderBottom = 'solid 0.3px rgb(172, 172, 172)';
    titleCountry.style.display = 'inline';
    titleTemp.style.textAlign = 'center';

    divTemp.style.display = 'flex';
    divTemp.style.justifyContent= 'space-between';
    divTemp.style.borderBottom = 'solid 0.3px rgb(172, 172, 172)';

    subDivTemp.style.display = 'flex';
    subDivTemp.style.alignItems = 'center';

    imgTemp.style.height = '60px';

    divWind.style.display = 'flex';
    divWind.style.justifyContent= 'space-between';

    imgWind.style.height = '60px';
    
}
function insertIcon(res, icon, title, card) {
    let iconRes = res.weather[0].icon;

    icon.style.height = '50%';
    icon.style.width = '50%';
    icon.style.margin = 'auto';
    title.style.textAlign = 'center';
    title.style.color = '#313131';
    title.style.borderBottom = 'solid 0.3px #6e6e6e';
    

    // clear sky
    if (iconRes === '01d') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg'
        title.textContent = 'Cielo Despejado'
    }
    if (iconRes === '01n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-night.svg'
        title.textContent = 'Cielo Despejadoy'
    }
    // few clounds
    if (iconRes === '02d') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast-day.svg'
        title.textContent = 'Pocas Nubes'
    }
    if (iconRes === '02n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast-night.svg'
        title.textContent = 'Pocas Nubes'
    }
    // Scattered clouds
    if (iconRes === '03d') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/cloudy.svg'
        title.textContent = 'Nubes Dispersas'
    }
    if (iconRes === '03n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast.svg'
        title.textContent = 'Nubes Dispersas'
    }
    // Broken Clouds
    if (iconRes === '04d') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast-day.svg'
        title.textContent = 'Nublado'
    }
    if (iconRes === '04n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/overcast-night.svg'
        title.textContent = 'Nublado'
    }
    // Shower Rain
    if (iconRes === '09d' ) {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day-rain.svg'
        title.textContent = 'Lluvia Fuerte'
    }
    if (iconRes === '09n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-night-rain.svg'
        title.textContent = 'Lluvia Fuerte'
    }
    //Rain
    if (iconRes === '10d' ) {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day-drizzle.svg'
        title.textContent = 'Lluvia'
    }
    if (iconRes === '10n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-night-drizzle.svg'
        title.textContent = 'Lluvia'
    }
    //Thunderstorm
    if (iconRes === '11d' ) {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-day.svg'
        title.textContent = 'Tormenta Eléctrica'
    }
    if (iconRes === '11n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/thunderstorms-night.svg'
        title.textContent = 'Tormenta Eléctrica'
    }
    // Snow
    if (iconRes === '13d' ) {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-day-snow.svg'
        title.textContent = 'Nevada'
    }
    if (iconRes === '13n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/partly-cloudy-night-snow.svg'
        title.textContent = 'Nevada'
    }
    // mist
    if (iconRes === '50d' ) {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/fog-day.svg'
        title.textContent = 'Neblina'
    }
    if (iconRes === '50n') {
        icon.src = 'https://bmcdn.nl/assets/weather-icons/v2.1/fill/fog-night.svg'
        title.textContent = 'Neblina'
    }
    card.appendChild(icon);
    card.appendChild(title);
}
function country(res) {
    
    let select = d.createElement('select'),
    label = d.createElement('label');
    label.textContent = `Ingresa la ciudad que deseas consultar:`
    label.classList.add('label');
    label.style.display = 'flex';
    label.style.width = '50%';
    label.style.flexDirection = 'column';
   
    container.appendChild(label);
    label.appendChild(select);
    let option = d.createElement('option');
        select.appendChild(option);
        option.value = ''
        option.textContent = ''
    res.forEach(el => {
        let option = d.createElement('option');
        select.appendChild(option);
        option.value = el.name
        option.textContent = el.name
    });
    
    
}

 function dayNigth(res) {
    
    let cssDay =  'skyblue';
    let cssNight =  'rgb(40, 1, 102)';
    let label =  d.querySelector('.label');
    let dayOrNigth =  res.weather[0].icon.charAt(2);
    
    if (dayOrNigth === 'd') {
        $body.style.backgroundColor = cssDay;
        
    } else {
        $body.style.backgroundColor = cssNight;
        label.style.color = 'white'
    }
}
function styleContainer() {
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.margin = '50px'
    container.style.alignItems = 'center';
}

function styleBody() {
    $body.style.display = 'flex';
    $body.style.flexDirection = 'column';
    $body.style.justifyContent = 'center';
    $body.style.alignItems = 'center';
    
}

// https://bas.dev/projects/weather-icons