from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    social_access_token = models.CharField(max_length=255, null=True, blank=True)
    social_refresh_token = models.CharField(max_length=255, null=True, blank=True)
    token_expiration_time = models.DateTimeField(null=True, blank=True)
    avatar = models.CharField(max_length=255, null=True, blank=True)
    lang = models.CharField(max_length=10, default='en')
    created_at = models.DateTimeField(auto_now_add=True)

class Friend(models.Model):
    my_id = models.ForeignKey(User, related_name='my_friends', on_delete=models.CASCADE)
    friend_id = models.ForeignKey(User, related_name='friends_with_me', on_delete=models.CASCADE)
