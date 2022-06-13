from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Profile, BusinessProfile
from .serializers import ProfileSerializer, BusinessProfileSerializer

#Profile
@api_view (["GET","POST"])
def register_profile_request(request):
        if request.method == 'GET':
                data = Profile.objects.all()
                
                serializer = ProfileSerializer(
                                                data,
                                                context={'request':request},
                                                many=True
                                        )
                
                return Response(serializer.data)
        
        if request.method == "POST":
            serializer = ProfileSerializer(data=request.data)
            
            if not serializer.is_valid():
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)





@api_view (['PUT',  'DELETE'])
def ProfileDetail(request, pk):
    try:
        user = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = ProfileSerializer(user, data= request.data , context = {'request':request})
       
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE':
        Profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#Business
@api_view (["GET","POST"])
def register_business_profile_request(request):
        if request.method == 'GET':
                data = BusinessProfile.objects.all()
                
                serializer = ProfileSerializer(
                                                data,
                                                context={'request':request},
                                                many=True
                                        )
                
                return Response(serializer.data)
        
        if request.method == "POST":
            serializer = ProfileSerializer(data=request.data)
            
            if not serializer.is_valid():
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)





@api_view (['PUT',  'DELETE'])
def BusinessProfileDetail(request, pk):
    try:
        profile = BusinessProfile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = BusinessProfileSerializer(profile, data= request.data , context = {'request':request})
       
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    elif request.method == 'DELETE':
        BusinessProfile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




# def login_request(request):  
#     if request.method == "POST":
        
#         form = AuthenticationForm(request, data=request.POST)
#         if form.is_valid():
#             username = form.cleaned_data.get('username')
#             password = form.cleaned_data.get('password')
#             user = authenticate(username=username, password=password)
        
#             if user is not None:
#                     login(request, user)
#                     messages.info(request, f"You are now logged in as {username}.")
#                     return render(request=request, template_name="main/home.html")

#             else:
#                     messages.error(request,"Invalid username or password.")

#     form = AuthenticationForm()
#     return render(request=request, template_name="main/login.html", context={"login_form":form})

# def logout_request(request):
#     logout(request)
#     messages.info(request, "Logged out successfully!")
#     return redirect("main:home")

# def password_reset_request(request):
    
#     if request.method == "POST":
#         password_reset_form = PasswordResetForm(request.POST)
   
#         if password_reset_form.is_valid():
#             data = password_reset_form.cleaned_data['email']
#             associated_users = User.objects.filter(Q(email=data))
      
#             if associated_users.exists():
      
#                 for user in associated_users:
#                     subject = "Password Reset Requested"
#                     email_template_name = "main/password/password_reset_email.txt"
#                     c = {
# 					"email":user.email,
# 					'domain':'127.0.0.1:8000',
# 					'site_name': 'Website',
# 					"uid":urlsafe_base64_encode(force_bytes(user.pk)),
# 					"user": user,
# 					'token': default_token_generator.make_token(user),
# 					'protocol': 'http',
# 					}
#                     email = render_to_string(email_template_name, c)
#                     try:
#                         send_mail(subject, email, 'admin@example.com' , [user.email], fail_silently=False)
#                     except BadHeaderError:
#                         return HttpResponse('Invalid header found.')
#                     return redirect ("/password_reset/done/")
#         password_reset_form = PasswordResetForm()
#     return render(request=request, template_name="main/password/password_reset_form.html", context={"password_reset_form":PasswordResetForm})
