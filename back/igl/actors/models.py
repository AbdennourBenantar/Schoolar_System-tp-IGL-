from django.db import models

class Student(models.Model):
    full_name = models.CharField(max_length=90)
    email = models.EmailField(max_length=254)
    classe = models.ForeignKey("Classe", models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.email


class Classe(models.Model):
    class_number = models.CharField(max_length=50)
    section = models.CharField(max_length=50)