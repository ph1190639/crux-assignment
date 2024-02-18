from rest_framework.views import APIView
from rest_framework.response import Response
from .parse_resume import get_resume_data
from .models import Resume

# Create your views here.

class TryAPI(APIView):
    def get(self, request):
        return Response({"message":"succesffuly working"})
    

class ParseResume(APIView):
    def post(self, request):
        resumes = request.FILES.getList('resumes')
        response = []
        for resume in resumes:
            data = get_resume_data(resume)
            resume = Resume.objects.create(resume_details=data)
            resume.save()
            resume.append(resume)
                
        return Response({"message":"succesffuly working", "data":response})