from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse 
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 
from .models import Student,Group
from .serializers import GroupSerializer, StudentSerializer

'''class studentList(APIView):
    def get(self,request):
        all_Students = Student.objects.all()
        serializer = StudentSerializer(all_Students, many = True)
        return Response(serializer.data) # return JSON 

def post(self):
    pass '''

@api_view(['GET', 'POST'])
def student_list(request):
    """
    List all code students, or create a new student.
    """
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def Group_list(request):
    """
    List all code Groups, or create a new Group.
    """
    if request.method == 'GET':
        Groups = Group.objects.all()
        serializer = GroupSerializer(Groups, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)