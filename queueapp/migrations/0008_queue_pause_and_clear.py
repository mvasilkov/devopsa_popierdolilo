# Generated by Django 2.1.3 on 2019-02-27 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queueapp', '0007_auto_20190220_1642'),
    ]

    operations = [
        migrations.AddField(
            model_name='queue',
            name='pause_and_clear',
            field=models.BooleanField(default=False),
        ),
    ]
