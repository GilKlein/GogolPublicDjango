from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("image-srch", views.image_search, name="imageSearch"),
    path("advancedSearch", views.advanced_search, name="advancedSearch"),
]