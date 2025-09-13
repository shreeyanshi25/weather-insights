import React, { useState, useRef } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloudy_icon from '../assets/cloudy.png';
import rain_icon from '../assets/rain.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import showers_icon from '../assets/showers.png';
import snow_icon from '../assets/snow.png';

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(null);
  const [news, setNews] = useState([]);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": showers_icon,
    "04n": showers_icon,
    "09d": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (!city || city.trim() === "") {
      alert("Enter City Name");
      return;
    }
    try {
      // 🌦 Weather API
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const weatherRes = await fetch(weatherUrl);
      const weatherJson = await weatherRes.json();

      if (!weatherRes.ok) {
        alert(weatherJson.message);
        setWeatherData(null);
        setNews([]);
        return;
      }

      const icon = allIcons[weatherJson.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: weatherJson.main.humidity,
        windSpeed: weatherJson.wind.speed,
        temperature: Math.floor(weatherJson.main.temp),
        location: weatherJson.name,
        icon: icon,
      });

      // 📰 News API
      const newsUrl = `https://newsapi.org/v2/everything?q=${city}&pageSize=5&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_KEY}`;
      const newsRes = await fetch(newsUrl);
      const newsJson = await newsRes.json();

      if (newsJson.articles) {
        setNews(newsJson.articles);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error("Error fetching weather/news:", error);
      setWeatherData(null);
      setNews([]);
    }
  };

  return (
    <div className="weather">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search city"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(inputRef.current.value);
            }
          }}
        />
        <img
          src={search_icon}
          alt="search"
          onClick={() => search(inputRef.current.value)}
          className="search-icon"
        />
      </div>

      {/* Flex wrapper for weather + news */}
      <div className="content-wrapper">
        {/* Weather Info */}
        {weatherData && (
          <div className="weather-info">
            <img src={weatherData?.icon} alt="" className="weather-icon" />
            <p className="temperature">{weatherData?.temperature}°c</p>
            <p className="location">{weatherData?.location}</p>

            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                  <p>{weatherData?.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                  <p>{weatherData?.windSpeed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Section */}
        {news.length > 0 && (
          <div className="news-section slide-in">
            <h3>Latest News in {weatherData?.location}</h3>
            <ul>
              {news.map((article, i) => (
                <li key={i}>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

