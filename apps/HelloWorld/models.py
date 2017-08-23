# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import re
from django.db import models

class Users(models.Model):
	first_name = models.CharField(max_length=255) 
	last_name = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	password= models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add = True) 
	updated_at = models.DateTimeField(auto_now = True)
