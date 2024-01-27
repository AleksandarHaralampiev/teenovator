from django.db import models



class user(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    bio = models.CharField(max_length=200)
    certifications = models.ImageField(upload_to='images/')
    projects = models.models.CharField(max_length=100)
    
    