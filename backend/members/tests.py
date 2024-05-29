from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import User

class UserRegistrationViewTest(TestCase):

    def setUp(self):
        self.client = APIClient()
        self.registration_url = reverse('user_registration')
        self.valid_payload = {
            'email': 'testuser@example.com',
            'nickname': 'testuser',
            'password': 'testpassword123',
            'lang': 'en'
        }
        self.invalid_payload = {
            'email': 'invaliduser',  # Invalid email format
            'nickname': 'testuser',
            'password': 'testpassword123'
        }

    def test_register_user_with_valid_payload(self):
        response = self.client.post(self.registration_url, data=self.valid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('id', response.data)
        self.assertIn('email', response.data)
        self.assertIn('nickname', response.data)
        self.assertEqual(response.data['email'], self.valid_payload['email'])
        self.assertEqual(response.data['nickname'], self.valid_payload['nickname'])

    def test_register_user_with_invalid_payload(self):
        response = self.client.post(self.registration_url, data=self.invalid_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
