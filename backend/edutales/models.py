from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Answer(models.Model):
    answer = models.TextField()
    isTrue = models.BooleanField()

    def __str__(self):
        return self.answer


class Quiz(models.Model):
    points = models.PositiveIntegerField()
    question = models.TextField()
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE, null=True)

    def __str__(self):
            return self.question


class Tale(models.Model):
    CHOICES = (
        ('w', 'witzig'),
        ('g', 'gruselig')
    )

    title = models.TextField()
    type = models.CharField(max_length=1, choices=CHOICES, null=True)
    text = models.TextField()
    quiz = models.OneToOneField(Quiz, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.title


class Destination(models.Model):
    name = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)
    tale = models.ForeignKey(Tale, on_delete=models.CASCADE, null=True)

    def __str__(self):
            return self.name


class Region(models.Model):
    name = models.TextField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class GameType(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class Progress(models.Model):
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True)
    points = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)


class Reward(models.Model):
    name = models.TextField()
    original_file_name = models.TextField()
    content_type = models.TextField()
    size = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Child(models.Model):

    CHOICES = (
        ('p', 'Pink'),
        ('b', 'Blue'),
        ('g', 'Green')
    )

    user_name = models.TextField()
    year_of_birth = models.IntegerField()
    game = models.CharField(max_length=1, choices=CHOICES, null=True)
    progress = models.ForeignKey(Progress, on_delete=models.CASCADE, null=True)
    reward = models.ForeignKey(Reward, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.user_name


class Parent(models.Model):
    first_name = models.TextField(null= True)
    last_name = models.TextField(null= True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null= True)
    day_of_birth = models.DateField(null=True)
    region = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)
    children = models.ForeignKey(Child, on_delete=models.CASCADE, null=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Parent.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.parent.save()


