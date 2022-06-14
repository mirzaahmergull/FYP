from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Profile, BusinessProfile
from .serializers import ProfileSerializer, BusinessProfileSerializer
import json
from django.views.decorators.csrf import csrf_exempt

# Profile


@api_view(["GET", "POST"])
def profile_login_signup(request):
    print("IN PROFILE API REQUEST")

    if request.method == 'GET':
        data = Profile.objects.all()
        serializer = ProfileSerializer(
            data,
            context={'request': request},
            many=True
        )
        return Response(json.dumps({"data":serializer.data}))

    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        serializer = ProfileSerializer(data=data)
        print(serializer)
        if not serializer.is_valid():
            print("IS NOT VALID")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT',  'DELETE'])
def ProfileDetail(request, pk):
    try:
        user = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProfileSerializer(
            user, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# Business


@api_view(["GET", "POST"])
def business_login_signup(request):
    if request.method == 'GET':
        data = BusinessProfile.objects.all()
        for obj in data:
                serializer = BusinessProfileSerializer(
                    data,
                    context={'request': request},
                    many=True
                )
                return Response(data=json.dumps({"data":serializer.data,"status":True}))

    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        serializer = BusinessProfileSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT',  'DELETE'])
def BusinessProfileDetail(request, pk):
    try:
        profile = BusinessProfile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = BusinessProfileSerializer(
            profile, data=request.data, context={'request': request})

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        BusinessProfile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def VendorImageView(request):
    if request.method == 'GET':
        data = VendorImage.objects.all()

    serializer = ProfileSerializer(
        data,
        context={'request': request},
        many=True
    )

    return Response(serializer.data)


def login_request(request):
    pass


def logout_request(request):
    pass

@csrf_exempt
def login(request):
    body = json.loads(request.body.decode("utf-8"))
    all_vendors_objs = BusinessProfile.objects.all()
    all_user_objs = Profile.objects.all()
    my_email = body['email']
    my_password = body['password']
    print(my_email, my_password)

    for obj in all_user_objs:
        if obj.email == my_email and obj.password == my_password:
            print("Profile Found")
            return HttpResponse(json.dumps({
                "success": True,
                "type": "Client",
                "firstname": obj.first_name,
                "lastname": obj.last_name
            }))
    for obj in all_vendors_objs:
        if obj.email == my_email and obj.password == my_password:
            print("Buisness Profile Found")
            return HttpResponse(json.dumps({
                "success": True,
                "type": "Client",
                "firstname": obj.first_name,
                "lastname": obj.last_name,
                "vendortype": obj.vendor_type,
                "buisness_name": obj.buisness_type
            }))
    print("Noting found")
    return HttpResponse(json.dumps({
        "success": False,
        "message": "Email or password is incorrect or user doesn't exist"
    }))


def signup(request):
    body = json.loads(request.body.decode("utf-8"))
    print(body)

    return Response(json.dumps({
        "success": False,
        "message": "Email or password is incorrect or user doesn't exist"
    }))
