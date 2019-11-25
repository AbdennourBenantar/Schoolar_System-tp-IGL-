from django.urls import path
from . import views

urlpatterns = [
    path('students/',views.student_list),
    #path('<>')

    #api for Groups 

]
