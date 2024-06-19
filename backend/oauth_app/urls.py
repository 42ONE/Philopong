from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('login/callback/', views.callback, name='callback'),
]

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('login/', views.fortytwo_login, name='fortytwo_login'),
#     path('login/callback/', views.fortytwo_callback, name='fortytwo_callback')
# ]
