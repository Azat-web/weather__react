import axios from 'axios';

const API_KEY = 'ebaccce7a791576860d251188bde275e';

export const fetchWeather = async (query) => {
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

