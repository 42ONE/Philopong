# oauth_app/backends.py

from requests_oauthlib import OAuth2Session
from django.conf import settings
from django.contrib.auth.models import User

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

    def get_user_info(self, token):
        forty_two = OAuth2Session(self.client_id, token=token)
        response = forty_two.get(self.user_info_url)
        return response.json()

    def authenticate(self, token):
        user_info = self.get_user_info(token)
        try:
            user = User.objects.get(username=user_info['login'])
        except User.DoesNotExist:
            user = User.objects.create(username=user_info['login'], first_name=user_info['first_name'], last_name=user_info['last_name'], email=user_info['email'])
        return user
