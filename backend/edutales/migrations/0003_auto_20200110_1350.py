# Generated by Django 2.2.7 on 2020-01-10 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('edutales', '0002_auto_20200110_1349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='child',
            name='year_of_birth',
            field=models.IntegerField(null=True),
        ),
    ]
