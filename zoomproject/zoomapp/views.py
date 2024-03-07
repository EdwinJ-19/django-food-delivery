from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def cart(request):
    return render(request,'cart.html')

def login(request):
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

def checkout(request):
    return render(request,'checkout.html')

def delivery(request):
    return render(request,'delivery.html')

def restaurantmenu(request):
    return render(request,'restaurantmenu.html')