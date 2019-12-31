from django.db import models

class Student(models.Model):
    full_name = models.CharField(max_length=90)
    email = models.EmailField(max_length=254)
    Group = models.ForeignKey("Group", models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.email


class Group(models.Model):
    class_number = models.CharField(max_length=50)
    section = models.CharField(max_length=50)