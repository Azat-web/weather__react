import React from 'react';
import { fetchWeather } from './Api/fetchWeather';


function App() {
   const [query, setQuery] = React.useState('');
   const [weather, setWeather] = React.useState({});
   const [searchClick, setSearchClick] = React.useState(false);

   const searchClickItem = () => {
      setSearchClick(true);
   }

   const search = React.useEffect(async (event) => {
      if (searchClick === true) {
         const data = await fetchWeather(query);
         console.log(data)
         setWeather(data);
         setQuery('');
         setSearchClick(false)
      }
   }, [searchClick])


   return (
      <div className="main-container">
         <div class="search-box">
            <input type="text" class="search-txt" placeholder="Введите название города" value={query} onChange={(event) => setQuery(event.target.value)} onKeyPress={search} />
            <a href="#" onClick={searchClickItem} class="search-btn"><i class="fa fa-search" aria-hidden="true"></i></a>
         </div>
         {weather.main && (<div className="city">
            <h2 className="city-name">
               <span>{weather.name}</span>
               <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
               {Math.round(weather.main.temp)}
               <sup>&deg;C</sup>
            </div>
            <div className="info">
               {weather.main.temp && (weather.main.temp >= 30 ? "Жара... Пейте больше воды" :
                  weather.main.temp < 30 && weather.main.temp >= 15 ? "Хорошая температура для прогулок" :
                     weather.main.temp < 15 && weather.main.temp > 0 ? "Прохладно, одеватейсь теплее" :
                        weather.main.temp < 0 && weather.main.temp >= -15 ? "Мороз... Доставайте всё самое теплое" :
                           weather.main.temp < -15 ? "Лучше оставайтесь дома" : "")}
               <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
               <p>{weather.weather[0].description}</p>
            </div>
         </div>)}
      </div>);
}

export default App
