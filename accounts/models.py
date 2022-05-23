from django.contrib.auth.models import User
from django.db import models


class Vendor(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    vendor_type=models.CharField(max_length=140,blank=False)
    buisness_name=models.CharField(max_length=140,blank=False)
    desc = models.CharField(max_length=140,blank=True)
    avatar = models.ImageField(upload_to='avatars/',default='avatars/default.png')

class Client(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    desc = models.CharField(max_length=140,blank=True)
    avatar = models.ImageField(upload_to='avatars/',default='avatars/default.png')