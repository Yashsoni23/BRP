import React, { useState,useEffect } from 'react'
import Tempcard from './Tempcard';
import { NavLink } from 'react-router-dom';
import './style.css'
const Temp = () => {
    const [seatchValue,SetSearchValue] = useState("pune");
    const [tempInfo,SetTempInfo] = useState({});
    const getWeatherInfo= async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${seatchValue}&units=metric&appid=18190e52a1fc5de5645820b6478f1f58`;

            const res = await fetch(url);
            const data = await  res.json();
            // console.log(data);
            const {temp,humidity,pressure} = data.main;
            const {main: weathermood} = data.weather[0];
            const {name} = data;
            const {speed} =data.wind;
            const {contry,sunset} = data.sys;
            console.log(temp);
            const myWeatherInfo = {temp,humidity,pressure,weathermood,name,speed,contry,sunset};
                        SetTempInfo(myWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getWeatherInfo(); })
    
    return (
        <>
        <section className='Temp'>
            <div className="Navbar">
                <div className="NavItems">
                    <li><NavLink to='../Restorant' className='link'> Project-1</NavLink></li>
                    <li><NavLink to='../Temp' className='link'> Project-2</NavLink></li>
                    <li><NavLink to='../UseState' className='link'> Project-3</NavLink></li>
                    <li><NavLink to='../UseReducerHook' className='link'> Project-4</NavLink></li>
                    <li><NavLink to='../UseEffect' className='link'> Project-5</NavLink></li>
                </div>
            </div>
<div className="outer_Container">
        <div className="wrap">
                <div className="search">
                    <input type="search" id="search" placeholder='search....' autoFocus className='searchTerm' value={ seatchValue} onChange={(e)=>{SetSearchValue(e.target.value)}}/>
                    <button className="searchButton" type='button' onClick={getWeatherInfo}>search</button>
                </div>
            </div>
            <Tempcard tempInfo={tempInfo}/>
            </div>
            </section>
        </>
    )
}

export default Temp