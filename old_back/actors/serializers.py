from rest_framework import serializers
from .models import Group , Student



class StudentSerializer(serializers.ModelSerializer):
    class Meta :
        model = Student 
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta :
        model = Group
        fields = '__all__'