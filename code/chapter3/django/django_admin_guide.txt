
# Django Project Generation Guide

To generate the Django project and app files automatically, follow these steps:

1. Install Django if not already installed:
   ```bash
   pip install django
   ```

2. Create a new Django project:
   ```bash
   django-admin startproject backend_basics
   cd backend_basics
   ```

3. Create a new Django app:
   ```bash
   python manage.py startapp backend_basics_app
   ```

4. Update the `backend_basics/urls.py` file:
   ```python
   from django.urls import path, include

   urlpatterns = [
       path('', include('backend_basics_app.urls')),
   ]
   ```

5. Create a `urls.py` file in the `backend_basics_app` directory with the following content:
   ```python
   from django.urls import path
   from . import views

   urlpatterns = [
       path('', views.home),
       path('recommendations/', views.recommendations),
   ]
   ```

6. Update the `backend_basics_app/views.py` file:
   ```python
   from django.http import JsonResponse

   def home(request):
       return JsonResponse({"message": "Welcome to the Backend Basics API with Django!"})

   def recommendations(request):
       return JsonResponse({"recommendations": ["Movie 1", "Movie 2", "Movie 3"]})
   ```

7. Run the server:
   ```bash
   python manage.py runserver
   ```

Your Django project is now ready!
