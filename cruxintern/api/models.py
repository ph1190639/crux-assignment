from django.db import models

# Create your models here.

class RoleRequiremnts(models.Model):
    role = models.CharField(max_length=100)
    skills = models.CharField(max_length=100)
    
    def __str__(self):
        return self.role

class Resume(models.Model):
    resume_details = models.JSONField()
    
    def __str__(self):
        return self.pk