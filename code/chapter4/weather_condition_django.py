
from django.http import JsonResponse
from django.urls import path

def weather_condition_prediction(request):
    data = request.GET
    temperature = float(data.get("temperature", 0))
    if temperature < 10:
        prediction = "Cold"
    elif temperature < 25:
        prediction = "Mild"
    else:
        prediction = "Hot"
    return JsonResponse({"prediction": prediction})

urlpatterns = [
    path("api/weather-condition-prediction", weather_condition_prediction),
]
