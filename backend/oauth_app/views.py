# oauth_app/views.py

from django.contrib.auth import login, logout
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
    # 토큰을 세션에 저장
    request.session['oauth_token'] = token
    user = oauth.authenticate(token)
    if user:
        # 사용자 객체에 backend 속성 추가
        user.backend = 'oauth_app.backends.FortyTwoOAuth2Backend'
        login(request, user)  # Django의 인증 시스템 사용
        return redirect('https://127.0.0.1:3000/main-page')
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


def not_login(request):
    return JsonResponse({'logged_in': False})

def get_user_data(request):
    # OAuth2 세션을 사용하여 사용자 정보를 가져옵니다.
    oauth = FortyTwoOAuth2()

    # 사용자가 로그인되어 있는지 확인합니다.
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'User is not authenticated'}, status=401)

    # 사용자의 토큰이 세션에 있는지 확인합니다.
    token = request.session.get('oauth_token')
    if not token:
        return JsonResponse({'error': 'OAuth token not found in session'}, status=401)

    # 사용자 정보 가져오기
    user_info = oauth.get_user_info(token)
    if 'login' not in user_info or 'image' not in user_info:
        return JsonResponse({'error': 'Invalid user data from 42 API'}, status=400)

    # 필요한 정보만 추출
    response_data = {
        'user_name': user_info['login'],
        'profile_image_link': user_info['image']['link']
    }

    return JsonResponse(response_data)

def logout_view(request):
    """
    사용자를 로그아웃 처리하고 세션을 종료하는 뷰 함수
    """
    if request.user.is_authenticated:
        logout(request)  # Django의 기본 로그아웃 기능 사용
        return JsonResponse({'message': 'User logged out successfully'}, status=200)
    else:
        return JsonResponse({'error': 'User is not authenticated'}, status=401)
