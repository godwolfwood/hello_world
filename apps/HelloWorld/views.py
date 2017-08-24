# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import *
# Create your views here.

def index( request ):
    return render(request, "HelloWorld/index.html")

def login(request):
    return render(request, "HelloWorld/login.html")

def registration(request):
    return render(request, "HelloWorld/registration.html")

def add(request):
    count=0
    if len(request.POST['first_name_form'])<2:
        messages.add_message(request,messages.INFO,'First Name field is too short')
        count=1
    if len(request.POST['last_name_form'])<2:
        messages.add_message(request,messages.INFO,'Last Name field is too short')
        count=1
    if request.POST["pass_form"]!=request.POST["conf_form"]:
        messages.add_message(request,messages.INFO,'password does not match')
        count=1
    if len(request.POST["conf_form"])<8:
        messages.add_message(request,messages.INFO,'password needs to be at least 8 characters long')
        count=1

    if count==1:
        return redirect('/registration')    

    Users.objects.create(
    first_name=request.POST['first_name_form'],
    last_name=request.POST['last_name_form'],
    email=request.POST['email_form'],
    password=request.POST['conf_form']
    )
    request.session['id']=Users.objects.last().id
    request.session['fname']=Users.objects.get(id=request.session['id']).first_name
    return redirect("/")

def logout(request):
    del request.session['id']
    return redirect('/')

def log_in(request):
    user_db=Users.objects.all()
    for user in user_db:
        if user.email==request.POST['email_form']:
            if user.password==request.POST['password_form']:
                request.session['id']=Users.objects.get(email=request.POST['email_form']).id
                request.session['fname']=Users.objects.get(id=request.session['id']).first_name
                return redirect('/')
    messages.add_message(request,messages.INFO,'invalid login information')
    return redirect('/login')

def search(request):
    request.session['search_result']=request.POST['search_form']
    request.session['skills_result']=request.POST['skills_form']
    request.session['city_result']=request.POST['city_form']
    request.session['state_result']=request.POST['state_form']
    #print request.session['skills_result']
    count=0
    if len(request.POST['state_form']) == 0:
        messages.add_message(request,messages.INFO,'Please enter the state')
        count=1
    if count==1:
        return redirect('/')
    return redirect('/')
