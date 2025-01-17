
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/rain-prediction", methods=["POST"])
def rain_prediction():
    data = request.json
    prediction = "Rain" if data.get("humidity", 0) > 70 else "No Rain"
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(debug=True)
