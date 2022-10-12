
import './App.css';
import React, { useEffect, useState } from 'react';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import Timelocation from './components/Timelocation';
import Tempdetails from './components/Tempdetails';
import Forecast from './components/Forecast';
import FormatData from './Services/Weatherservice';
//import getWeatherData from './Services/Weatherservice';

function App() {

  const [query, setQuery] =useState ({q: 'New York'})
  const [units, setUnits] =useState('metric')
  const [weather, setweather]=useState(null)

  useEffect (() => {
      const fetchWeather = async () =>{
      await FormatData({...query, units}).then((data) => {setweather(data)})
    
    };

    fetchWeather();

  }, [query, units]);

  
   return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-800 h-fit shadow-xl shadow-gray-400">
      <TopButton setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <Timelocation weather={weather} />
          <Tempdetails weather={weather} />
          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
      
    </div>
  );
}
export default App;
