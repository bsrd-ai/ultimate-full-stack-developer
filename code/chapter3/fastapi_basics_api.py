
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def home():
    return {"message": "Welcome to the Backend Basics API with FastAPI!"}

@app.post("/recommendations")
async def recommend():
    return {"recommendations": ["Movie 1", "Movie 2", "Movie 3"]}
