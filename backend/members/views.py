from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .models import User, Friend
import json

@method_decorator(csrf_exempt, name='dispatch')
class UserRegistrationView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        user = User.objects.create_user(
            email=data['email'],
            username=data['nickname'],
            password=data['password'],
            lang=data.get('lang', 'en')
        )
        user.save()
        return JsonResponse({'id': user.id, 'email': user.email, 'nickname': user.username, 'lang': user.lang, 'created_at': user.created_at}, status=201)

@method_decorator(csrf_exempt, name='dispatch')
class UserLoginView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        user = authenticate(request, email=data['email'], password=data['password'])
        if user is not None:
            login(request, user)
            return JsonResponse({'token': 'dummy-token-for-now', 'user': {'id': user.id, 'email': user.email, 'nickname': user.username, 'avatar': user.avatar, 'lang': user.lang}}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class UserLogoutView(View):
    def post(self, request, *args, **kwargs):
        logout(request)
        return JsonResponse({'message': 'Successfully logged out.'}, status=200)

class UserProfileView(View):
    def get(self, request, id, *args, **kwargs):
        user = get_object_or_404(User, id=id)
        return JsonResponse({'id': user.id, 'email': user.email, 'nickname': user.username, 'avatar': user.avatar, 'lang': user.lang, 'created_at': user.created_at}, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class UserUpdateView(View):
    def patch(self, request, id, *args, **kwargs):
        data = json.loads(request.body)
        user = get_object_or_404(User, id=id)
        if 'nickname' in data:
            user.username = data['nickname']
        if 'avatar' in data:
            user.avatar = data['avatar']
        if 'lang' in data:
            user.lang = data['lang']
        user.save()
        return JsonResponse({'id': user.id, 'email': user.email, 'nickname': user.username, 'avatar': user.avatar, 'lang': user.lang, 'created_at': user.created_at}, status=200)

@method_decorator(csrf_exempt, name='dispatch')
class ChangePasswordView(View):
    def patch(self, request, id, *args, **kwargs):
        data = json.loads(request.body)
        user = get_object_or_404(User, id=id)
        if user.check_password(data['old_password']):
            user.set_password(data['new_password'])
            user.save()
            return JsonResponse({'message': 'Password updated successfully.'}, status=200)
        else:
            return JsonResponse({'error': 'Old password is incorrect.'}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class FriendAddView(View):
    def post(self, request, id, *args, **kwargs):
        data = json.loads(request.body)
        user = get_object_or_404(User, id=id)
        friend = get_object_or_404(User, id=data['friend_id'])
        Friend.objects.create(my_id=user, friend_id=friend)
        return JsonResponse({'message': 'Friend added successfully.'}, status=201)

class FriendListView(View):
    def get(self, request, id, *args, **kwargs):
        user = get_object_or_404(User, id=id)
        friends = user.my_friends.all()
        friend_data = [{'id': friend.friend_id.id, 'email': friend.friend_id.email, 'nickname': friend.friend_id.username} for friend in friends]
        return JsonResponse({'friends': friend_data}, status=200)

class UserSearchView(View):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('query')
        users = User.objects.filter(username__icontains=query)
        user_data = [{'id': user.id, 'email': user.email, 'nickname': user.username} for user in users]
        return JsonResponse({'users': user_data}, status=200)
