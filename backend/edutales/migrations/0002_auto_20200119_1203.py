# Generated by Django 2.2.7 on 2020-01-19 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('edutales', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tale',
            name='type',
            field=models.CharField(choices=[('w', 'witzig'), ('g', 'gruselig')], max_length=1, null=True),
        ),
    ]
