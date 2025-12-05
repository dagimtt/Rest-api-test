from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Letter
from .serializers import LetterSerializer

class LetterView(APIView):
    def get(self, request):
        letters = Letter.objects.all()
        serializer = LetterSerializer(letters, many=True)
        return Response(serializer.data)
