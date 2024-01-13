from django.db import models

# Create your models here.
class Gym(models.Model):
    name = models.CharField(max_length=200);
    address = models.CharField(max_length=1000);
    pub_date = models.DateTimeField("date published");

    def __str__(self):
        # This will return the following text to represent the object.
        return self.name;
