from django.db import models

# db table
# Table users {
#   id integer [primary key]
#   email varchar
#   social_access_token varchar
#   social_refresh_token varchar
#   token_expiration_time timestamp
#   lang varchar
#   created_at timestamp
# }

class User(models.Model):
    email = models.CharField(max_length=100)
    social_access_token = models.CharField(max_length=100)
    social_refresh_token = models.CharField(max_length=100)
    token_expiration_time = models.DateTimeField()
    lang = models.CharField(max_length=10)
    created_at = models.DateTimeField()
    intra_id = models.CharField(max_length=100)
    image_url = models.CharField(max_length=100)

    def __str__(self):
        return self.email