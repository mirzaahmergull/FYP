from rest_framework import serializers
from .models import Profile, BusinessProfile
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model= Profile
        fields="__all__"
        
        
class BusinessProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model= BusinessProfile
        fields="__all__"        
