from django.db import models

class Student(models.Model):
    full_name = models.CharField(max_length=90)
    matricule =models.AutoField(primary_key =True, auto_created=True)
    email = models.EmailField(max_length=254)
    classe = models.ForeignKey("Classe", models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.matricule.__str__()


class Classe(models.Model):
    class_number = models.CharField(max_length=50)
    section = models.CharField(max_length=50)
    def __str__(self):
        return self.class_number
    