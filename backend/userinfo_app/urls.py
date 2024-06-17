from django.urls import path
from . import views

urlpatterns = [
    path('check_login/', views.check_login),
    path('get_user_info/', views.get_user_info),
]
