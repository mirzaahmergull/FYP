import json
from sre_constants import CATEGORY_LINEBREAK
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import redirect
# Create your views here.
from django.views.generic import TemplateView
from django.views.generic.base import View
from .models import Vendor,Client

class SignUp_view_vendor(View):

    def post(self, request, *args, **kwargs):
        #save user data
        name=request.POST["name"]
        email=request.POST["email"]
        password=request.POST["password"]
        buisness_name=request.POST["business_name"]
        vendor_type=request.POST["vendor_type"]
        Vendor.save(name,email,password,buisness_name,vendor_type)
        return HttpResponse("Vendor Signup Complete")

class SignUp_view_vendor(View):

    def post(self, request, *args, **kwargs):
        #save user data
        name=request.POST["name"]
        email=request.POST["email"]
        password=request.POST["password"]
        Client.save(name,email,password)
        return HttpResponse("Client Signup Complete")

class LoginView(TemplateView):

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username', False)
        password = request.POST.get('password', False)
        if username and password:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                #check if user is client of vendor
                if Vendor.objects.filter(user=user).get():
                    return HttpResponse('Vendor Login Successfull') #return Vendor ID
                else:
                    return HttpResponse('Client Login Successfull') #return Client ID
            else:
                return HttpResponse('Error: User authentication error <a href="/login"">Try again</a>')
        else:
            return HttpResponse('Error: Username or password is empty <a href="/login">Try again</a>')
    
    def get(self, request):
        user_id = request.GET.get('user_id', False)
        user_type = request.GET.get('user_type', False)
        if user_type=='Vendor':
            user_details=Vendor.objects.filter(user=User.objects.filter(id=user_id).get())
        else:
            user_details=Client.objects.filter(user=User.objects.filter(id=user_id).get())
        
        return HttpResponse(json.dumps(user_details))
        


class LogoutView(View, LoginRequiredMixin):
    def get(self, request):
        logout(request)
        return ""