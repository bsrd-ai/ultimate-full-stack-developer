
from fastapi import FastAPI

app = FastAPI()

@app.post("/api/temperature-prediction")
async def temperature_prediction(data: dict):
    humidity = data.get("humidity", 50)
    temperature = 0.8 * humidity + 20  # Example regression formula
    return {"prediction": temperature}
