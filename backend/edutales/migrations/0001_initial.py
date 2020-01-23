# Generated by Django 2.2.7 on 2020-01-21 17:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.TextField()),
                ('isTrue', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.TextField()),
                ('year_of_birth', models.IntegerField()),
                ('game', models.CharField(choices=[('p', 'Pink'), ('b', 'Blue'), ('g', 'Green')], max_length=1, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='GameType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.PositiveIntegerField()),
                ('question', models.TextField()),
                ('answer', models.TextField()),
                ('isTrue', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('type', models.CharField(choices=[('w', 'witzig'), ('g', 'gruselig')], max_length=1, null=True)),
                ('text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('german', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('original_file_name', models.TextField()),
                ('content_type', models.TextField()),
                ('size', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.PositiveIntegerField()),
                ('question', models.TextField()),
                ('answer', models.ManyToManyField(blank=True, to='edutales.Answer')),
            ],
        ),
        migrations.CreateModel(
            name='Tale',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('type', models.CharField(choices=[('w', 'witzig'), ('g', 'gruselig')], max_length=1, null=True)),
                ('text', models.TextField()),
                ('pictures', models.ManyToManyField(blank=True, to='edutales.Media')),
                ('quiz', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Quiz')),
            ],
        ),
        migrations.CreateModel(
            name='Reward',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('history', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.History')),
                ('tale', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Tale')),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('destination', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Destination')),
            ],
        ),
        migrations.CreateModel(
            name='Progress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('points', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Quiz')),
                ('tale', models.ManyToManyField(blank=True, to='edutales.Tale')),
            ],
        ),
        migrations.CreateModel(
            name='Parent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.TextField(null=True)),
                ('last_name', models.TextField(null=True)),
                ('day_of_birth', models.DateField(null=True)),
                ('children', models.ManyToManyField(blank=True, related_name='parent', to='edutales.Child')),
                ('language', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Language')),
                ('region', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Region')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('type', models.CharField(choices=[('w', 'witzig'), ('g', 'gruselig')], max_length=1, null=True)),
                ('text', models.TextField()),
                ('quiz', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Quiz')),
            ],
        ),
        migrations.AddField(
            model_name='history',
            name='quiz',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Quiz'),
        ),
        migrations.AddField(
            model_name='destination',
            name='quiz',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Quiz'),
        ),
        migrations.AddField(
            model_name='destination',
            name='tale',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Tale'),
        ),
        migrations.AddField(
            model_name='child',
            name='progress',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Progress'),
        ),
        migrations.AddField(
            model_name='child',
            name='reward',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='edutales.Reward'),
        ),
    ]
