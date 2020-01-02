from django.urls import path

from .apiviews import deleteModule,UserCreateV2,LogInView,UpdateModule,GroupList,GroupDetail,UserCreate,StudentsList,UserDetail, StudentDetail,CreateModule,ModulesList
urlpatterns = [

    path('login/',LogInView.as_view(),name='login'),

    #path('createUser/',UserCreate.as_view(),name='create_user'),#
    path('createUserv2/',UserCreateV2.as_view(),name='create_user'),#

    path('studentsList/',StudentsList.as_view(),name='students_list'),#

    path('userDetails/<int:pk>/',UserDetail.as_view(), name ="user_details"),#
    path('studentDetails/<int:pk>/',StudentDetail.as_view(), name ="Student_details"),#


    path('modulesList/',ModulesList.as_view(), name ="modules_list"),         #
    path('createModule/',CreateModule.as_view(), name ="create_module"),        #
    path('updateModule/<int:pk>/',UpdateModule.as_view(), name ="update_module"),  #
    path('deleteModule/<int:pk>/', deleteModule.as_view(), name = "delete_module"),


    path('group/',GroupList.as_view(),name="group_list"),#
    path('group/<int:pk>/',GroupDetail.as_view(),name="group_detail"),#
]
