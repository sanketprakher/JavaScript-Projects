const apiKey = '33cf6c9af2f992db4240f782c40f3ee9'; // Replace with your API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';


document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput !== '') {
        getWeatherData(cityInput);
    }
});
const getWeatherData = (city) => {
    const apiUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    //! Using a callback to handle the asynchronous API call
    fetchData(apiUrl, data => displayWeather(data));
}

const fetchData = (url, callback) => {
    // Using Fetch API for AJAX call
    fetch(url).then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
        .then(data => callback(data))
        .catch(error => console.error('Error fetching data:', error));
}



function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    cityName.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Description: ${data.weather[0].description}`;
}
