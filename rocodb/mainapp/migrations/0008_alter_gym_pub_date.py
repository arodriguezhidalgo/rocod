# Generated by Django 5.0.1 on 2024-01-14 16:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0007_alter_gym_pub_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gym',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 1, 14, 16, 41, 36, 543204, tzinfo=datetime.timezone.utc), verbose_name='date published'),
        ),
    ]
