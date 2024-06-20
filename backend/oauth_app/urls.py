from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.fortytwo_login, name='fortytwo_login'),
    path('login/callback/', views.fortytwo_callback, name='fortytwo_callback'),
    path('check_login_status/', views.check_login_status, name='check_login_status'),
    path('not_login/', views.not_login, name='not_login'),
    path('get_user_data/', views.get_user_data, name='get_user_data'),
    path('logout/', views.logout_view, name='logout'),  # 로그아웃 엔드포인트 추가
]
