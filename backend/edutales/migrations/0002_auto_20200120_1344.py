# Generated by Django 2.2.7 on 2020-01-20 12:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('edutales', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='quiz',
        ),
        migrations.AddField(
            model_name='quiz',
            name='answer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Answer'),
        ),
    ]
