import React,{useEffect} from 'react'

const Tempcard = ({ tempInfo }) => {
    const [weatherState, SetWeatherState] = React.useState("");

    const { temp, humidity, pressure, weathermood, name, speed, contry, sunset } = tempInfo;
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    SetWeatherState("wi-day-cloudy")
                    break;
                case "Haze":
                    SetWeatherState("wi-fog")
                    break;
                case "Mist":
                    SetWeatherState("wi-dust")
                    break;

                default:
                    SetWeatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weathermood])


    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;



    return (
        <>


            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">{name},{contry}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">{timeStr} PM <br /> Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside"> {humidity}</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">{pressure}</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">{speed}</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Tempcard