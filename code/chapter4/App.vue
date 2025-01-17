
<template>
    <div>
        <h1>Rain Prediction: {{ rainPrediction || 'Loading...' }}</h1>
        <h1>Temperature Prediction: {{ temperaturePrediction || 'Loading...' }}</h1>
        <h1>Weather Condition: {{ weatherCondition || 'Loading...' }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rainPrediction: null,
            temperaturePrediction: null,
            weatherCondition: null,
        };
    },
    created() {
        fetch("http://127.0.0.1:5000/api/rain-prediction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ humidity: 80 })
        })
            .then(res => res.json())
            .then(data => this.rainPrediction = data.prediction);

        fetch("http://127.0.0.1:8000/api/temperature-prediction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ humidity: 80 })
        })
            .then(res => res.json())
            .then(data => this.temperaturePrediction = data.prediction);

        fetch("http://127.0.0.1:8080/api/weather-condition-prediction?temperature=15")
            .then(res => res.json())
            .then(data => this.weatherCondition = data.prediction);
    }
};
</script>
