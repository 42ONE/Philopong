# oauth_app/views.py

from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.http import JsonResponse, HttpResponse, HttpRequest
from .backends import FortyTwoOAuth2, FortyTwoOAuth2Backend
from django.contrib.auth.decorators import login_required
import logging


# 로그 설정
logger = logging.getLogger(__name__)

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
def check_login_status(request: HttpRequest):
    # 개행 추가를 위한 문자열
    separator = "\n" * 5

    # 요청의 내용을 로그로 출력 (개행 추가)
    logger.info(f"{separator}--- Start of Request Details ---{separator}")
    logger.info(f"Request Method: {request.method}")
    logger.info(f"Request URL: {request.build_absolute_uri()}")
    logger.info(f"Request Headers: {dict(request.headers)}")
    logger.info(f"Request GET Parameters: {request.GET}")
    logger.info(f"Request POST Parameters: {request.POST}")
    logger.info(f"Request Cookies: {request.COOKIES}")
    logger.info(f"Request User: {request.user}")
    logger.info(f"{separator}--- End of Request Details ---{separator}")
    
    # 요청의 내용을 응답으로 반환
    request_data = {
        'method': request.method,
        'url': request.build_absolute_uri(),
        'headers': dict(request.headers),
        'get_parameters': request.GET.dict(),
        'post_parameters': request.POST.dict(),
        'cookies': request.COOKIES,
        'user': {
            'is_authenticated': request.user.is_authenticated,
            'username': request.user.username if request.user.is_authenticated else None
        }
    }
    
    return JsonResponse({'logged_in': True, 'username': request.user.username, 'request_data': request_data})