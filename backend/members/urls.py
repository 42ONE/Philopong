from django.urls import path
from .views import UserRegistrationView, UserLoginView, UserLogoutView, UserProfileView, UserUpdateView, ChangePasswordView, FriendAddView, FriendListView, UserSearchView

urlpatterns = [
    path('members/', UserRegistrationView.as_view(), name='user_registration'),
    path('members/login/', UserLoginView.as_view(), name='user_login'),
    path('members/logout/', UserLogoutView.as_view(), name='user_logout'),
    path('members/<int:id>/', UserProfileView.as_view(), name='user_profile'),
    path('members/<int:id>/update/', UserUpdateView.as_view(), name='user_update'),
    path('members/<int:id>/password/', ChangePasswordView.as_view(), name='change_password'),
    path('members/<int:id>/friends/', FriendAddView.as_view(), name='friend_add'),
    path('members/<int:id>/friends/list/', FriendListView.as_view(), name='friend_list'),
    path('members/search/', UserSearchView.as_view(), name='user_search'),
]
