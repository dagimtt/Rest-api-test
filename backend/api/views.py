from rest_framework import generics
from .models import Letter
from .serializers import LetterSerializer

class LetterView(generics.ListCreateAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer

class LetterDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Letter.objects.all()
    serializer_class = LetterSerializer
