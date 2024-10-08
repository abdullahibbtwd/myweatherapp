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
import { TiThermometer } from 'react-icons/ti';
import { MdWaterDrop } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import { FaSnowflake } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { WiHumidity } from "react-icons/wi";
import Aside from './Aside';
import dayjs from 'dayjs';


const Content = () => {

    const inputRef = useRef();
const [weatherData,setWeatherData] = useState(false);
const [weData ,setWeData] = useState(false);
const [dData ,setDData] = useState(false);

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

    const search = async (city)=>{
        if (city === ""){
            alert("Enter City Name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
        
            const response2 = await fetch(url2);
            const data2 = await response2.json();
         

            const response = await fetch(url);
            const data = await response.json();
            
            const icon = allIcons[data.weather[0].icon] || Sun;


            setDData({
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

            setWeData({
               
                    tempreture1:data2.list[13].main.temp,
                    icon1:allIcons[data2.list[13].weather[0].icon],
                    tempreture2:data2.list[14].main.temp,
                    icon2:allIcons[data2.list[14].weather[0].icon],
                    tempreture3:data2.list[15].main.temp,
                    icon3:allIcons[data2.list[15].weather[0].icon],
                    tempreture4:data2.list[16].main.temp,
                    icon4:allIcons[data2.list[16].weather[0].icon],
                    tempreture5:data2.list[17].main.temp,
                    icon5:allIcons[data2.list[17].weather[0].icon],
                    tempreture6:data2.list[18].main.temp,
                    icon6:allIcons[data2.list[18].weather[0].icon],
                
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
        search("Kano")
    },[])
  return (
    <div className='maincont'>
        <div className="allin">
        <div className="searchinput">
            <input  ref={inputRef} type="search" placeholder='Search For Cities' />
            <FaSearch  onClick={()=>search(inputRef.current.value)} />
        </div>
        {weatherData?<>
            <div className="icont">
            <div className="cont2">
                <div className="tect">
                    <p>{weatherData.location}</p>
                    <span>Chance of Rain :{weatherData.chanceOfRain}%</span>
                </div>
                <div className="tect1">
                    <p>{weatherData.tempreture}°c</p>
                   
                </div>
            </div>
            <div className="sun">
            <img src={weatherData.icon} alt="" srcset="" />
            </div>
        </div>
        <div className="wcont">
                <p>Today Forecast</p>
                <div className="allcol">
                <div className="col">
                <span className='time'>6:00AM</span>
                <img src={weData.icon1} alt="" />
                <span>{weData.tempreture1}°c</span>
                </div>
                <div className="line">
                </div>
                <div className="col">
                <span className='time'>9:00AM</span>
                <img src={weData.icon2} alt="" />
                <span>{weData.tempreture2}°</span>
                </div>
                <div className="line">
                </div>
                <div className="col">
                <span className='time'>12:00PM</span>
                <img src={weData.icon3} alt="" />
                <span>{weData.tempreture3}°</span>
                </div>
                <div className="line">
                </div>
                <div className="col">
                <span className='time'>2:00PM</span>
                <img src={weData.icon4} alt="" />
                <span>{weData.tempreture4}°</span>
                </div>
                <div className="line">
                </div>
                <div className="col">
                <span className='time'>4:00PM</span>
                <img src={weData.icon5} alt="" />
                <span>{weData.tempreture5}°</span>
                </div>
                <div className="line">
                </div>
                <div className="col">
                <span className='time'>6:00PM</span>
                <img src={weData.icon6} alt="" />
                <span>{weData.tempreture6}°</span>
                </div>
                </div>
        </div>
        <div className="last">
            <div className="first1">
                <div className='spncon'>
                    <span>AIR CONDITION</span>
                </div>
                <div className='btncon'>
                    <button>  See More</button>
                </div>
            </div>
            <div className="conta">
            <div className="second">
                <div className="temp">
                    <div className='te'>
                        <TiThermometer/>
                        <span>Real Feel</span>
                    </div>
                    <p>{weatherData.tempreture}°c</p>
                </div>
                <div className="temp">
                    <div className='te'>
                        <MdWaterDrop/>
                        <span>Chance Of Rain</span>
                    </div>
                    <p>{weatherData.chanceOfRain}%</p>
                </div>
                
            </div>
            <div className="second">
                <div className="temp">
                    <div className='te'>
                        <FaWind/>
                        <span>Wind</span>
                    </div>
                    <p>{weatherData.windSpeed} km/h</p>
                </div>
                <div className="temp">
                    <div className='te'>
                        < WiHumidity/>
                        <span>Humidity</span>
                    </div>
                    <p>{weatherData.humidity}</p>
                </div>
                </div>
            </div>
        </div>
       
        </>:<></>}
      

    </div>
    <div className="aside">
    {dData?<>
    <div className='asidemain'>
        <div className="asidee">
            <span className='sev'>5-DAY FORECAST</span>
            <div className='day'>
                <div className="dayy">
                    <div className='today'><span>{dayjs(dData.time1).format('dddd')}</span></div>
                    <div className='iim'> <img src={dData.icon1} alt=""  />
                        <p>{dData.desc1}</p></div>
                        <div className='tt'><p><span>{dData.tempreture1}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(dData.time2).format('dddd')}</span></div>
                    <div className='iim'> <img src={dData.icon2} alt=""  />
                        <p>{dData.desc2}</p></div>
                        <div className='tt'><p><span>{dData.tempreture2}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(dData.time3).format('dddd')}</span></div>
                    <div className='iim'> <img src={dData.icon3} alt=""  />
                        <p>{dData.desc3}</p></div>
                        <div className='tt'><p><span>{dData.tempreture3}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(dData.time4).format('dddd')}</span></div>
                    <div className='iim'> <img src={dData.icon4} alt="" srcset="" />
                        <p>{dData.desc4}</p></div>
                        <div className='tt'><p><span>{dData.tempreture4}</span>°</p></div>
                </div>
                <div className="hline"></div>
                <div className="dayy">
                    <div className='today'><span>{dayjs(dData.time5).format('dddd')}</span></div>
                    <div className='iim'> <img src={dData.icon5} alt="" srcset="" />
                        <p>{dData.desc5}</p></div>
                        <div className='tt'><p><span>{dData.tempreture5}</span>°</p></div>
                </div>
             
             
               
            </div>
            
        
        </div>
       
    </div>
    </>:<></>}
      </div>
      
    </div>
  )
}

export default Content