from rest_framework import serializers 
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = User 
        fields =("username","email","password")
        extra_kwargs = {"password": {'write_only' : True}}

    def create (self,validated_data):
        user = User(
            email = validated_data['email'],
            username = validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        return user


class ModuleSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'
        extra_kwargs = {
              'student':{'required': False},
             'note': {'required': False},
             }
        

class StudentSerializer(serializers.ModelSerializer):
    modules = ModuleSerilizer(many = True, required = False)
    class Meta :
        model = Student
        fields = '__all__'
        extra_kwargs = {
              'user':{'required': False},
             'group': {'required': False},
             }

'''
    def create (self,validated_data):
        
        user = User(
            email = validated_data['email'],
            username = validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        student = Student(
            user = user ,
            group = validated_data['group']
        )
'''
'''def update(self, instance, validated_data):
        instance.user = validated_data.get('user', instance.user)
        instance.group = validated_data.get('group', instance.group)
        instance.save()
        return instance'''


class GroupSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many= True, required=False)
    class Meta:
        model = Group
        fields = '__all__'