
import React, { useEffect, useState } from 'react';

function App() {
    const [rainPrediction, setRainPrediction] = useState(null);
    const [temperaturePrediction, setTemperaturePrediction] = useState(null);
    const [weatherCluster, setWeatherCluster] = useState(null);
    const [weatherAlert, setWeatherAlert] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/rain-prediction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ humidity: 80 })
        })
            .then(res => res.json())
            .then(data => setRainPrediction(data.prediction));

        fetch("http://127.0.0.1:8000/api/temperature-prediction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ humidity: 80 })
        })
            .then(res => res.json())
            .then(data => setTemperaturePrediction(data.prediction));

        fetch("http://127.0.0.1:8080/api/weather-clustering?temperature=15&humidity=70")
            .then(res => res.json())
            .then(data => setWeatherCluster(data.cluster));

        fetch("http://127.0.0.1:5001/api/weather-alert", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ temperature: 32, humidity: 35 })
        })
            .then(res => res.json())
            .then(data => setWeatherAlert(data.action));
    }, []);

    return (
        <div>
            <h1>Rain Prediction: {rainPrediction || "Loading..."}</h1>
            <h1>Temperature Prediction: {temperaturePrediction || "Loading..."}</h1>
            <h1>Weather Cluster: {weatherCluster || "Loading..."}</h1>
            <h1>Weather Alert: {weatherAlert || "Loading..."}</h1>
        </div>
    );
}

export default App;
