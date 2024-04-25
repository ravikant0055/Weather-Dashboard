import React, { useState, useEffect } from 'react';
import raincloud from '../asset/rain.png';
import cloudspic from '../asset/clouds.png';
import clear from '../asset/clear.png';
import haze from '../asset/haze.png';
import snow from '../asset/snow.png';
import weatherIcons from '../image.json';
import Sound from 'react-sound';
import rain from '../asset/rain.wav';
import sunny from '../asset/bird.mp3';
import cloud from '../asset/clouds.wav';
const Weather = ({ data }) => {
  
  const [image, setImage] = useState('');
  const [wsound, setWsound] = useState('');
  const [icon, setIcon] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    switch (data.weather[0].main) {
      case 'Clear':
        setImage(weatherIcons.images.clear);
        setWsound(sunny);
        setIcon(clear);
        break;
      case 'Haze':
        setImage(weatherIcons.images.haze);
        setWsound(sunny);
        setIcon(haze);
        break;
      case 'Clouds':
        setImage(weatherIcons.images.cloudy);
        setWsound(cloud);
        setIcon(cloudspic);
        break;
      case 'Rain':
        setImage(weatherIcons.images.rain);
        setWsound(rain);
        setIcon(raincloud);
        break;
      case 'Snow':
        setImage(weatherIcons.images.snow);
        setWsound(sunny);
        setIcon(snow);
        break;
      case 'Dust':
        setImage(weatherIcons.images.wind);
        setWsound(cloud);
        setIcon(cloudspic);
        break;
      case 'Fog':
        setImage(weatherIcons.images.fog);
        setWsound(cloud);
        setIcon(cloudspic);
        break;
      case 'Smoke':
        setImage(weatherIcons.images.smoke);
        setWsound(cloud);
        setIcon(cloudspic);
      break;  
      default:
        setImage('');
    }
  }, [data]);


  return (
    <div className="flex justify-center md:mt-5 overflow-hidden">
      <div className='w-[120vh] md:h-[700px] h-[100%] md:backdrop-blur-xl md:backdrop-brightness-50 md:rounded-xl flex flex-col md:flex-row overflow-hidden '>

        <div className='md:w-[60%] w-[100%] relative'>
          <img className='w-[100vh] h-full object-cover relative' src={image}/>
          <h1 className='text-white text-5xl p-3 absolute top-0 right-4'>{data.name}</h1>
          <h1 className='text-white text-3xl p-3 absolute top-12 right-4'>{data.sys.country}</h1>
          <h1 className='text-white text-7xl absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center'>{Math.round(data.main.temp)}°C</h1>
          <p className='text-white text-xl p-3 absolute bottom-8 left-0'>Humidity: {data.main.humidity}%</p>
          <p className='text-white text-xl p-3 absolute bottom-1 left-0'>Wind Speed: {data.wind.speed} m/s</p>
        </div>
        
        <div className='md:w-[40%] w-[100%] bg-[#131c23] md:bg-transparent flex flex-col gap-3 items-center py-9'>
          <img src={icon} className='w-[120px]' alt='Weather Icon'/>
           <Sound
            url={wsound}
            playStatus={isLoaded ? Sound.status.PLAYING : Sound.status.PAUSED}
            autoLoad={true}
            loop={true}
            onLoad={handleLoad}
          />
          <h1 className='text-white text-4xl font-medium '> {data.weather[0].main}</h1>
          <hr className="h-1 w-[80%] mt-3" />
          <div className='flex flex-col justify-center items-center gap-3 w-[100%]'>
            <div className='flex justify-between w-[75%] text-white text-lg'>
              <p>Temperature:</p>  
              <p>{Math.round(data.main.temp)}°C</p>
            </div> 
            <div className='flex justify-between w-[75%] text-white text-lg'>
              <p>Humidity:</p>  
              <p>{data.main.humidity}%</p>
            </div>
            <div className='flex justify-between w-[75%] text-white text-lg'>
              <p>Wind Speed: </p>  
              <p>{data.wind.speed} m/s</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Weather;