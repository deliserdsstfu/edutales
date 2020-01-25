from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Quiz(models.Model):
    points = models.PositiveIntegerField()
    question = models.TextField()
    isTrue = models.BooleanField()

    class Meta:
        verbose_name = 'Quiz'
        verbose_name_plural = 'Quizzes'

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
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)
    pictures = models.ManyToManyField('Media', blank=True)

    def __str__(self):
            return self.title


class Language(models.Model):
    language = models.TextField()

    def __str__(self):
        return self.language


class History(models.Model):

    title = models.TextField()
    text = models.TextField()

    class Meta:
        verbose_name = 'History'
        verbose_name_plural = 'Histories'

    def __str__(self):
        return self.title


class Region(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class GameType(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class Reward(models.Model):
    name = models.TextField()
    history = models.ForeignKey(History, on_delete=models.CASCADE, null=True)
    tale = models.ForeignKey(Tale, on_delete=models.CASCADE, null=True)
    pictures = models.ManyToManyField('Media', blank=True)


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
    progress = models.PositiveIntegerField(null = True)
    reward = models.ForeignKey(Reward, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = 'Child'
        verbose_name_plural = 'Children'

    def __str__(self):
        return self.user_name


class Parent(models.Model):
    first_name = models.TextField(null= True)
    last_name = models.TextField(null= True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null= True)
    day_of_birth = models.DateField(null=True)
    region = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)
    children = models.ManyToManyField('Child', blank = True , related_name= 'parent')
    language = models.ForeignKey(Language, on_delete=models.CASCADE, null= True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Media(models.Model):
    original_file_name = models.TextField()
    content_type = models.TextField()
    size = models.PositiveIntegerField()

    def __str__(self):
        return self.original_file_name


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Parent.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.parent.save()
