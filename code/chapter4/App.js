
import React, { useEffect, useState } from 'react';

function App() {
    const [rainPrediction, setRainPrediction] = useState(null);
    const [temperaturePrediction, setTemperaturePrediction] = useState(null);
    const [weatherCondition, setWeatherCondition] = useState(null);

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

        fetch("http://127.0.0.1:8080/api/weather-condition-prediction?temperature=15")
            .then(res => res.json())
            .then(data => setWeatherCondition(data.prediction));
    }, []);

    return (
        <div>
            <h1>Rain Prediction: {rainPrediction || "Loading..."}</h1>
            <h1>Temperature Prediction: {temperaturePrediction || "Loading..."}</h1>
            <h1>Weather Condition: {weatherCondition || "Loading..."}</h1>
        </div>
    );
}

export default App;
