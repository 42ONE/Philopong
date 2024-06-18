from django.shortcuts import redirect
from django.http import JsonResponse
import requests

# 42 API 클라이언트 ID와 비밀
CLIENT_ID = 'u-s4t2ud-55550ebcca6cb44059fcd2728d70aad8b98968c87439b28c0548e035f09cc684'
CLIENT_SECRET = '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'
REDIRECT_URI = 'http://127.0.0.1:8000/oauth/callback/'

# 인덱스 뷰 - OAuth2 인증 페이지로 리디렉션
def login(request):
    authorize_url = (
        "https://api.intra.42.fr/oauth/authorize"
        "?client_id={client_id}"
        "&redirect_uri={redirect_uri}"
        "&response_type=code"
        "&scope=public projects profile elearning tig forum"
        "&state=random_state_string"
    ).format(
        client_id=CLIENT_ID,
        redirect_uri=REDIRECT_URI,
    )
    # 리다이렉션 URL 반환
    return JsonResponse({'authorize_url': authorize_url})

# 콜백 뷰 - 액세스 토큰 교환 및 사용자 정보 반환
def callback(request):
    code = request.GET.get('code')
    state = request.GET.get('state')

    token_url = 'https://api.intra.42.fr/oauth/token'
    token_data = {
        'grant_type': 'authorization_code',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'code': code,
        'redirect_uri': REDIRECT_URI,
    }

    token_response = requests.post(token_url, data=token_data)
    token_json = token_response.json()
    access_token = token_json.get('access_token')

    user_info_url = 'https://api.intra.42.fr/v2/me'
    headers = {'Authorization': f'Bearer {access_token}'}
    user_info_response = requests.get(user_info_url, headers=headers)

    user_info = user_info_response.json()
    return redirect('http://127.0.0.1:3000/main-page')
    # return JsonResponse(user_info)
