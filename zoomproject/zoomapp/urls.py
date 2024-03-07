from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('cart/',views.cart,name='cart'),
    path('login/',views.login,name='login'),
    path('register/',views.register,name='register'),
    path('checkout/',views.checkout,name='checkout'),
    path('delivery/',views.delivery,name='delivery'),
    path('restaurantmenu/',views.restaurantmenu,name='restaurantmenu'),
]