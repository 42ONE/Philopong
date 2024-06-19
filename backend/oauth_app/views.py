# oauth_app/views.py

from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.http import JsonResponse, HttpResponse
from .backends import FortyTwoOAuth2, FortyTwoOAuth2Backend
from django.contrib.auth.decorators import login_required

def fortytwo_login(request):
    oauth = FortyTwoOAuth2()
    authorization_url, state = oauth.get_authorization_url()
    request.session['oauth_state'] = state
    return JsonResponse({'authorize_url': authorization_url})

def fortytwo_callback(request):
    oauth = FortyTwoOAuth2()
    token = oauth.get_token(request.get_full_path())
    user = oauth.authenticate(token)
    if user:
        # 사용자 객체에 backend 속성 추가
        user.backend = 'oauth_app.backends.FortyTwoOAuth2Backend'
        login(request, user)  # Django의 인증 시스템 사용
        return redirect('http://127.0.0.1:3000/main-page')
    else:
        return HttpResponse("Authentication failed", status=401)

@login_required
def protected_view(request):
    return HttpResponse(f"Welcome to the protected view, {request.user.username}")

@login_required
def check_login_status(request):
    return JsonResponse({'logged_in': True, 'username': request.user.username})
