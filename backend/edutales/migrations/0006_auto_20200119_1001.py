# Generated by Django 2.2.7 on 2020-01-19 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('edutales', '0005_auto_20200110_1354'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='parent',
            name='year_of_birth',
        ),
        migrations.AddField(
            model_name='parent',
            name='day_of_birth',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='parent',
            name='first_name',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='parent',
            name='last_name',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='child',
            name='game',
            field=models.CharField(choices=[('p', 'Pink'), ('b', 'Blue'), ('g', 'Green')], max_length=1, null=True),
        ),
    ]
