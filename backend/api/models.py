from django.db import models

class Letter(models.Model):
    ref_num = models.IntegerField()
    title = models.CharField(max_length=255)
    body = models.TextField(blank=True)
