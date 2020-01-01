from rest_framework import generics 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import User
from django.contrib.auth import authenticate


from .models import Student,Module, Group
from .serializers import StudentSerializer, ModuleSerilizer, GroupSerializer


from .serializers import UserSerializer, StudentSerializer

class LogInView(APIView):
     
     def post(self,request):
        username= request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password = password)

        if user :
             u = User.objects.get(username=username)
             s = Student.objects.get(pk=u.id)
             data = StudentSerializer(s).data
             return Response(data=data ,status=status.HTTP_202_ACCEPTED)
        else :
             return Response({"error": "wrong stuff (passwd or username) plz contact azouaw"},status=status.HTTP_400_BAD_REQUEST)

class UserCreate(generics.CreateAPIView):
    serializer_class = UserSerializer


class UserCreateV2(APIView):  ## daaaanger i commented out the on save litner in the models
    def post(self, request):
        username= request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")
        group = request.data.get("group")
        user = User(
            email = email,
            username = username)
        user.set_password(password)
        user.save()
        student = Student(
            id=user.id,
            user = user,
            group = Group.objects.get(pk=group),
            email = email,
            username = username
        )
        student.save()
        print(group)

        return Response(StudentSerializer(student).data)

    
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

### list  of all the students   *
class StudentsList(generics.ListAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class StudentDetail(generics.RetrieveUpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
    def update (self, request, *args, **kwargs):
        instance = self.get_object()
        instance.user = request.data.get("user")
        instance.group = request.data.get("group") 
        instance.save()

        serializer = self.get_serializer(instance)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

        

class ModulesList(generics.ListCreateAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerilizer

class CreateModule(generics.CreateAPIView):
    serializer_class = ModuleSerilizer

class UpdateModule(generics.UpdateAPIView):
    serializer_class = ModuleSerilizer
    queryset = Module.objects.all()

class deleteModule(generics.DestroyAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerilizer
    

### return all groups each with his students  *
class GroupList(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

### returns the students of a specific group  *
class GroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset =Group.objects.all()
    serializer_class = GroupSerializer


###