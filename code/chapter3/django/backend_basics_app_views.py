from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Welcome to the Backend Basics API with Django!"})

def recommendations(request):
    return JsonResponse({"recommendations": ["Movie 1", "Movie 2", "Movie 3"]})
