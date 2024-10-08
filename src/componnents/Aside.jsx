import React, { useEffect, useRef, useState } from 'react'
import { MdWbSunny } from "react-icons/md";
import Sun from '../assets/image/sun (1).png'
import Cloud from '../assets/image/cloud (1).png'
import CloudS from '../assets/image/sun.png'
import Rainy from '../assets/image/weather-app.png'
import Cloudy from '../assets/image/cloudy.png'
import shower from '../assets/image/shower.png'
import Thunder from '../assets/image/thunderstorm.png'
import Snow from '../assets/image/snow.png'
import Mist from '../assets/image/mist.png'
import dayjs from 'dayjs';



const Aside = () => {
    const inputRef = useRef();
    const [weatherData,setWeatherData] = useState(false);
    const [weData ,setWeData] = useState({});

    
        const allIcons = {
            "01d": Sun,
            "01n":Sun,
            "02d":CloudS,
            "02n":CloudS,
            "03d":Cloud,
            "03n":Cloud,
            "04d":Cloudy,
            "04n":Cloudy,
            "09d":shower,
            "09n":shower,
            "10d":Rainy,
            "10n":Rainy,
            "11d":Thunder,
            "11n":Thunder,
            "13d":Snow,
            "13n":Snow,
            "50d":Mist,
            "50n":Mist
        }
    
        const search= async (city)=>{


            if (city === ""){
                alert("Enter City Name");
                return;
            }
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
                const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

            
               
                const response2 = await fetch(url2);
                const data2 = await response2.json();
                console.log(data2)

    
                const response = await fetch(url);
                const data = await response.json();
                
                const icon = allIcons[data.weather[0].icon] || Sun;

              
            
                setWeData({
                   time1:data2.list[0].dt_txt,
                    tempreture1:data2.list[0].main.temp,
                    icon1:allIcons[data2.list[0].weather[0].icon],
                    desc1:data2.list[0].weather[0].main,
                    time2:data2.list[8].dt_txt,
                    tempreture2:data2.list[8].main.temp,
                    icon2:allIcons[data2.list[8].weather[0].icon],
                    desc2:data2.list[8].weather[0].main,
                    time3:data2.list[16].dt_txt,
                    tempreture3:data2.list[16].main.temp,
                    icon3:allIcons[data2.list[16].weather[0].icon],
                    desc3:data2.list[16].weather[0].main,
                    time4:data2.list[24].dt_txt,
                    tempreture4:data2.list[24].main.temp,
                    icon4:allIcons[data2.list[24].weather[0].icon],
                    desc4:data2.list[24].weather[0].main,
                    time5:data2.list[32].dt_txt,
                    tempreture5:data2.list[32].main.temp,
                    icon5:allIcons[data2.list[32].weather[0].icon],
                    desc5:data2.list[32].weather[0].main,
                  
                    
                })
    
                setWeatherData({
                    humidity:data.main.humidity,
                    windSpeed:data.wind.speed,
                    tempreture:Math.floor(data.main.temp),
                    chanceOfRain:data.clouds.all,
                    location:data.name,
                    icon:icon
                })
            } catch (error) {
                setWeatherData(false);
                console.error("error fetching error")
            }
        }
        
   
    
        useEffect(()=>{
            search("Kaduna")
          
        },[])
  return (
    <div className='asidemain'>
        <div className="asidee">
            <span className='sev'>5-DAY FORECAST</span>
            <div className='day'>
                <div className="dayy">
                    <div className='today'><span>{dayjs(weData.time1).format('dddd')}</span></div>
                    <div className='iim'> <img src={weData.icon1} alt=""  />
                        <p>{weData.desc1}</p></div>
                        <div className='tt'><p><span>{weData.tempreture1}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(weData.time2).format('dddd')}</span></div>
                    <div className='iim'> <img src={weData.icon2} alt=""  />
                        <p>{weData.desc2}</p></div>
                        <div className='tt'><p><span>{weData.tempreture2}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(weData.time3).format('dddd')}</span></div>
                    <div className='iim'> <img src={weData.icon3} alt=""  />
                        <p>{weData.desc3}</p></div>
                        <div className='tt'><p><span>{weData.tempreture3}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(weData.time4).format('dddd')}</span></div>
                    <div className='iim'> <img src={weData.icon4} alt="" srcset="" />
                        <p>{weData.desc4}</p></div>
                        <div className='tt'><p><span>{weData.tempreture4}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(weData.time5).format('dddd')}</span></div>
                    <div className='iim'> <img src={weData.icon5} alt="" srcset="" />
                        <p>{weData.desc5}</p></div>
                        <div className='tt'><p><span>{weData.tempreture5}</span>°</p></div>
                </div>
             
             
               
            </div>
            
        
        </div>
    </div>
  )
}

export default Aside