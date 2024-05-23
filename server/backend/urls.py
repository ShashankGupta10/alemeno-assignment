from django.urls import path
from .views import result
urlpatterns = [
    path("get_result", result)
]