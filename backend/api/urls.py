from django.urls import path
from .views import LetterView

urlpatterns = [
    path('letters/', LetterView.as_view())
]
