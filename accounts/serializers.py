from rest_framework import serializers
from .models import Profile, BusinessProfile, VendorImage
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model= Profile
        fields="__all__"
        
        
class BusinessProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model= BusinessProfile
        fields="__all__"        

        
class VendorImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    # print("SERAILIZER")

    class Meta:
        model = VendorImage
        fields = ('image_key', 'business_name', 'vendor_type',
                  'title', 'image', 'creation_date')
