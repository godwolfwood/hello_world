# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index( request ):
    return render(request, "HelloWorld/index.html")

def login(request):
    return render(request, "HelloWorld/login.html")

def search(request):
    print "--------------------jsgsga"
    request.session['search_term'] = request.POST['search_form']
    request.session['city_term'] = request.POST['city_form']
    print request.session['search_term']
    print request.session['city_term']
    return redirect('/')