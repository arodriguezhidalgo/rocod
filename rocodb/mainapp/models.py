from django.db import models

# Create your models here.
class Gym(models.Model):
    name = models.CharField(max_length=200);
    address = models.CharField(max_length=1000, default="<empty>");
    country = models.CharField(max_length=200, default="<empty>");
    post_code = models.CharField(max_length=20, default="<empty>");
    pub_date = models.DateTimeField("date published");
    description = models.CharField(max_length=1000, default="<empty>");

    def __str__(self):
        # This will return the following text to represent the object.
        return self.name;
