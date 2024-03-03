from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def cart(request):
    return render(request,'cart.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')