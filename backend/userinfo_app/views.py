from django.shortcuts import render
from django.http import JsonResponse
from django.utils import timezone
from userinfo_app.models import User

# db에서 유저정보를 가져오는 함수,  유저 intra id와 이미지cdn주소를 response해준다.
def get_user_info(request):
    # 유저정보를 가져올 유저의 intra id를 받는다.
    intra_id = request.GET.get('intra_id')
    # db에서 유 저정보를 가져온다.
    user = User.objects.get(intra_id=intra_id)
    # 유저의 intra id와 이미지cdn주소를 response해준다.
    return JsonResponse({
        'intra_id': user.intra_id,
        'image_url': user.image_url,
    })

def check_login(request):
    # 유저가 로그인 되어있는지 확인하는 함수
    if request.user.is_authenticated:
        return JsonResponse({'is_login': True})
    else:
        return JsonResponse({'is_login': False})