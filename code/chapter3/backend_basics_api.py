
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Backend Basics API!"})

@app.route("/recommendations", methods=["POST"])
def recommend():
    return jsonify({"recommendations": ["Movie 1", "Movie 2", "Movie 3"]})

if __name__ == "__main__":
    app.run(debug=True)
