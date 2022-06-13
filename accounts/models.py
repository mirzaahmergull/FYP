from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

#Basic
class Profile(models.Model):#simple user
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100, blank=True)
    last_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=150)
    password= models.CharField(max_length=100)
    
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def update_profile_signal(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()
    
#Business
class BusinessProfile(models.Model):
    vendor_type = models.CharField(max_length=100, blank=True) 
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    business_name = models.CharField(max_length=100, blank=True)
    full_name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=150)
    password= models.CharField(max_length=45)
    
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=User)
def update_Businessprofile_signal(sender, instance, created, **kwargs):
    if created:
        BusinessProfile.objects.create(user=instance)
    instance.profile.save()
    
    
    
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class VendorImage(models.Model):

    image_key = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    title = models.CharField(max_length=100, blank=False)
    business_name = models.CharField(max_length=100, blank=False)
    vendor_type = models.CharField(max_length=100, blank=False)
    creation_date = models.DateTimeField(auto_now_add=True)
    print("VENDOR IMAGE MODEL")

    def __str__(self):
        return f"Object business {self.business_name}, title {self.title} and vendor_type {self.vendor_type}"

