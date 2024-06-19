# oauth_app/backends.py

from requests_oauthlib import OAuth2Session
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.backends import BaseBackend

class FortyTwoOAuth2:
    def __init__(self):
        self.client_id = settings.FORTYTWO_CLIENT_ID
        self.client_secret = settings.FORTYTWO_CLIENT_SECRET
        self.authorization_base_url = 'https://api.intra.42.fr/oauth/authorize'
        self.token_url = 'https://api.intra.42.fr/oauth/token'
        self.user_info_url = 'https://api.intra.42.fr/v2/me'
        self.redirect_uri = 'http://127.0.0.1:8000/oauth/login/callback/'  # 설정한 redirect_uri

    def get_authorization_url(self):
        forty_two = OAuth2Session(self.client_id, redirect_uri=self.redirect_uri)
        authorization_url, state = forty_two.authorization_url(self.authorization_base_url)
        return authorization_url, state

    def get_token(self, authorization_response):
        forty_two = OAuth2Session(self.client_id, redirect_uri=self.redirect_uri)
        token = forty_two.fetch_token(
            self.token_url,
            authorization_response=authorization_response,
            client_secret=self.client_secret,
            client_id=self.client_id,  # client_id 포함
            include_client_id=True  # client_id를 요청 본문에 포함
        )
        return token

    def get_user_info(self, token): # 사용자 정보 가져오기
        forty_two = OAuth2Session(self.client_id, token=token) # OAuth2Session 객체 생성
        response = forty_two.get(self.user_info_url) # 사용자 정보 요청
        return response.json() # JSON 형태로 반환

    def authenticate(self, token): # 사용자 정보를 가져와서 User 객체를 반환
        user_info = self.get_user_info(token) # 사용자 정보 가져오기
        try: # 사용자 정보로 User 객체 가져오기
            user = User.objects.get(username=user_info['login']) # username으로 User 객체 가져오기
        except User.DoesNotExist: # User 객체가 없으면 새로 생성
            user = User.objects.create(username=user_info['login'], first_name=user_info['first_name'], last_name=user_info['last_name'], email=user_info['email']) # User 객체 생성
        return user

# oauth_app/backends.py

class FortyTwoOAuth2Backend(BaseBackend):
    def authenticate(self, request, username=None, email=None, **kwargs):
        try:
            user = User.objects.get(username=username)
            return user
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
