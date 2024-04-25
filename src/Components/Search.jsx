import React, { useState } from 'react'
import axios from 'axios';
const Search = ({ onWeatherData }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=c0d573b18729da9019711dcbacf8458d&units=metric`)
      .then((response) => {
        onWeatherData(response.data);
        setQuery('');
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  return (
    <div className="flex justify-center py-5 backdrop-blur-xl backdrop-brightness-50">
      <form onSubmit={handleSubmit} className='w-screen flex justify-center text-nowrap'>
        <input type="text" className='text-xl py-3  md:w-[400px] pl-3 text-white placeholder:text-white border-b-2 bg-inherit border-b-white' placeholder="Enter city name" value={query} onChange={handleChange}/>
        <button type="submit" className='border-white border-2 text-white py-1 px-6 md:px-9 md:py-3 ml-3 hover:bg-white rounded-lg hover:text-black'>Search</button>
      </form>
    </div>
  )
}

export default Search;