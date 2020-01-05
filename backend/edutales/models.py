from django.db import models


class Quiz(models.Model):
    name = models.TextField()
    tale = models.OneToOneField(models.Tale, on_delete=models.CASCADE, null=True)
    points = models.PositiveIntegerField()
    question = models.TextField()

    def __str__(self):
            return self.name


class Region(models.Model):
    name = models.TextField()
    destination = models.ForeignKey(models.Destination, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Tale(models.Model):
    CHOICES = (
        ('a', 'Action'),
        ('c', 'Comedy')
    )

    title = models.TextField()
    type = models.CharField(max_length=1, choices=CHOICES, null=True)
    text = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title


class Destination(models.Model):
    name = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)
    tale = models.ForeignKey(Tale, on_delete=models.CASCADE, null=True)

    def __str__(self):
            return self.name


class GameType(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class Progress(models.Model):
    user = models.ForeignKey(models.User, on_delete=models.CASCADE, null=True)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, null=True)
    points = models.ForeignKey(Quiz, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.user


class Reward(models.Model):
    name = models.TextField()
    original_file_name = models.TextField()
    content_type = models.TextField()
    size = models.PositiveIntegerField()

    def __str__(self):
        return self.name


class Child(models.Model):
    user_name = models.TextField()
    year_of_birth = models.IntegerField()
    game = models.ForeignKey(GameType, on_delete=models.CASCADE, null=True)
    progress = models.ForeignKey(Progress, on_delete=models.CASCADE, null=True)
    reward = models.ForeignKey(Reward, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.user_name


class Parent(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    year_of_birth = models.IntegerField()
    region = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)
    children = models.ForeignKey(Child, on_delete=models.CASCADE, null=True)

    def __str__(self):
            return '%s %s (%s)' % (self.first_name, self.last_name, self.year_of_birth)
