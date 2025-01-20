
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
