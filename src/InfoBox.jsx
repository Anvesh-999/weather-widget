export default function InfoBox() {
    let info = {
        feels_like: 20.84,
        humidity: 50,
        pressure: 1014,
        temp: 21.34,
        temp_max: 21.34,
        temp_min: 21.34,
        weather: "clear sky",
        wind_speed: 1.76
    }
    return (
        <div className="InfoBox">
            <h1>weather Info- {info.weather}</h1>
        </div>
    );
}