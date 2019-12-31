from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User




class Group (models.Model):
    group_num = models.IntegerField(unique = True)

    def __str__(self):
        return self.group_num.__str__()

class Student(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    group = models.ForeignKey(Group, related_name='students', on_delete=models.CASCADE,null = True,blank = True)

    def __str__(self):
        return self.user.username
    

    #two post_save methodes (whenever a user is created or saved)
   # @receiver(post_save, sender= User)
    def create_user_Student(sender, instance, created, **kwargs):
        if created :
            s = Student.objects.create(user=instance)
            s.modules.set([])
            s.save()

   # @receiver(post_save, sender = User)
    def save_user_Student(sender, instance, **kwargs):
        instance.student.save()


class Module(models.Model):
    name = models.CharField(max_length=50)
    coef = models.IntegerField(default= 0)
    teacher = models.CharField( max_length=50)
    note = models.IntegerField(default=0)
    student = models.ForeignKey(Student,related_name='modules', on_delete=models.CASCADE,null= True)