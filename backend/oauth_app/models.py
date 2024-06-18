from django.db import models
from django.contrib.auth.models import User  # Django의 기본 사용자 모델을 가져옵니다.


#db 연결테스트를 위하 임시 모델
class Post(models.Model):
    title = models.CharField(max_length=200)  # 제목 필드, 최대 길이 200자
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # 작성자 필드, User 모델과의 외래 키 관계
    content = models.TextField()  # 내용 필드, 길이 제한 없음
    created_at = models.DateTimeField(auto_now_add=True)  # 생성 날짜 필드, 자동으로 현재 시간 설정
    updated_at = models.DateTimeField(auto_now=True)  # 수정 날짜 필드, 자동으로 현재 시간으로 갱신

    class Meta:
        ordering = ['-created_at']  # 최신 게시물이 먼저 표시되도록 정렬

    def __str__(self):
        return self.title  # 객체를 문자열로 표시할 때 제목을 반환
