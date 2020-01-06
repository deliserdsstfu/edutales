from rest_framework import serializers
from .models import *


class RegionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['id', 'name']

class GameTypeOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameType
        fields = ['id', 'name']


class ChildListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child



class ChildFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child



class ChildOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child
        fields = ['id', 'user_name']


class ParentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parent
        fields = '__all__'


class ParentFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parent



class ParentOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Parent
        fields = ['id', 'name']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))


class TaleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale



class TaleFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale



class TaleOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = ['id', 'title']


class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward



class DestinationListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination



class DestinationFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination



class DestinationOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = ['id', 'title']

class ProgressListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress



class ProgressFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress



class ProgressOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress
        fields = ['id', 'title']

class QuizListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz



class QuizFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz



class QuizOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = ['id', 'title']




