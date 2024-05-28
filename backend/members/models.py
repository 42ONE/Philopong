from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(unique=True)
    nickname = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    social_access_token = models.CharField(max_length=255, blank=True, null=True)
    social_refresh_token = models.CharField(max_length=255, blank=True, null=True)
    token_expiration_time = models.DateTimeField(blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    lang = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nickname