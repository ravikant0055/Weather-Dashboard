import { useState } from 'react';
import Search from './Components/Search';
import Weather from './Components/Weather';
function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <Search onWeatherData={handleWeatherData} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
