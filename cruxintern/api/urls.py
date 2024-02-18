from django.urls import path
from .views import *

urlpatterns=[
    path("try/", TryAPI.as_view(), name="try-api"),
    path("parse/", ParseResume.as_view(), name="parse-resume"),  
]