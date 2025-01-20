
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
