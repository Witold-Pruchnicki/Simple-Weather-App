import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6b5a6c27b336a7ba4b14a30712d34eba`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setData(data);
                });

            setLocation('');
        }
    };

    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter location"
                    type="text"
                />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temperature">
                        {data.main ? <h2>{data.main.temp}°C</h2> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined && (
                    <div className="bottom">
                        <div className="feeling-temperature">
                            {data.main ? <p>{data.main.feels_like} °C</p> : null}
                            <p>Feels like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p>{data.wind.speed} km/h</p> : null}
                            <p>Wind speed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
