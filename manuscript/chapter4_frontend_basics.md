# Chapter 4: Frontend Development Basics

Frontend development is the art of creating intuitive, visually appealing, and user-friendly interfaces that enable seamless interaction with applications. As a full-stack developer, mastering frontend technologies is essential for bridging the gap between backend systems and end users. In this chapter, we explore the fundamental principles of frontend development, introduce popular frameworks, and demonstrate how they integrate with backend systems to create intelligent applications.

---

## 1. Understanding Frontend Development

Frontend development focuses on creating the visual and interactive components of a web application. It encompasses three core areas:

- **Structure**: Defined using **HTML** (HyperText Markup Language), which provides the basic framework for web content.
- **Style**: Enhanced with **CSS** (Cascading Style Sheets) to improve the visual appeal, layout, and responsiveness of web pages.
- **Behavior**: Powered by **JavaScript**, enabling dynamic content, interactivity, and seamless user experiences.

### Key Objectives of Frontend Development:

1. **Usability**: Ensuring the interface is intuitive and user-friendly.
2. **Accessibility**: Designing for inclusivity, ensuring that users with disabilities can interact with the application.
3. **Performance**: Optimizing loading times and responsiveness for smooth operation.
4. **Scalability**: Building modular and maintainable code for long-term sustainability.

---

## 2. The Role of Frontend Frameworks

In this book, we will exclusively use React as the frontend framework. React, developed by Facebook, is a JavaScript library designed for building component-based, reusable UI elements. It stands out for its virtual DOM, which enhances performance, and its flexibility in handling complex application structures.

---

## 3. Connecting Frontend and Backend

Frontend and backend systems work together to deliver a seamless user experience. The frontend interacts with the backend through APIs, fetching and sending data to ensure dynamic content and functionality.

### Key Concepts:

- **RESTful APIs**: A standard protocol for communication between frontend and backend.
- **State Management**: Managing the application’s data and UI state using tools like Redux (for React).
- **Authentication**: Implementing secure methods to verify users, such as OAuth or JWT (JSON Web Tokens).

---

## 4. Building Multiple Backend APIs

To demonstrate the integration between frontend frameworks and backend systems, we’ll create four distinct backend APIs for a weather forecasting system. These APIs will later be connected to different machine learning paradigms. For now, they use placeholder logic, with real AI/ML implementations introduced in future chapters.

### **1. Flask API for Rain Prediction (Supervised Learning)**

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/rain-prediction", methods=["POST"])
def rain_prediction():
    data = request.json
    prediction = "Rain" if data.get("humidity", 0) > 70 else "No Rain"
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(debug=True)
```

[Rain Prediction Flask Code](../code/chapter4/rain_prediction_flask.py)

### **2. FastAPI for Temperature Prediction (Regression)**

```python
from fastapi import FastAPI

app = FastAPI()

@app.post("/api/temperature-prediction")
async def temperature_prediction(data: dict):
    humidity = data.get("humidity", 50)
    temperature = 0.8 * humidity + 20  # Example regression formula
    return {"prediction": temperature}
```

[Temperature Prediction FastAPI Code](../code/chapter4/temperature_prediction_fastapi.py)

### **3. Django API for Weather Clustering (Unsupervised Learning)**

```python
from django.http import JsonResponse
from django.urls import path

def weather_clustering(request):
    data = request.GET
    temperature = float(data.get("temperature", 0))
    humidity = float(data.get("humidity", 0))
    if temperature < 15 and humidity > 60:
        cluster = "Cluster 1: Cold-Humid"
    elif temperature > 25 and humidity < 50:
        cluster = "Cluster 2: Hot-Dry"
    else:
        cluster = "Cluster 3: Moderate"
    return JsonResponse({"cluster": cluster})

urlpatterns = [
    path("api/weather-clustering", weather_clustering),
]
```

[Weather Clustering Django Code](../code/chapter4/weather_clustering_django.py)

### **4. Flask API for Weather Alerts (Reinforcement Learning)**

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/weather-alert", methods=["POST"])
def weather_alert():
    data = request.json
    temperature = data.get("temperature", 20)
    humidity = data.get("humidity", 50)
    if temperature > 30 and humidity < 40:
        action = "Send Heat Alert"
    elif temperature < 5 and humidity > 70:
        action = "Send Cold Alert"
    else:
        action = "No Action"
    return jsonify({"action": action})

if __name__ == "__main__":
    app.run(debug=True)
```

[Weather Alerts Flask Code](../code/chapter4/weather_alert_flask.py)

---

## 5. React Integration with APIs

Here’s how React fetches data from all four APIs:

```javascript
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
```

[React Code Example](../code/chapter4/App.js)

---

## 6. What’s Next?

Having established a foundation for integrating React with multiple backend APIs for weather forecasting, we will move to more advanced AI implementations in future chapters. By mastering these basics, you’ll be equipped to build intelligent, user-friendly applications that seamlessly integrate with powerful backend systems.
