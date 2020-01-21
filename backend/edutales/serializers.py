from drf_yasg.utils import swagger_auto_schema
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser

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
        fields = '__all__'


class ChildFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child
        fields = '__all__'


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
        fields = '__all__'


class ParentOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Parent
        fields = '__all__'


class TaleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = '__all__'

class TaleFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = '__all__'

class TaleOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = ['id', 'title']

class HistoryListSerializer(serializers.ModelSerializer):

    class Meta:
        model = History
        fields = '__all__'

class HistoryFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = History
        fields = '__all__'

class HistoryOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = History
        fields = ['id', 'title']


class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = '__all__'

class DestinationListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = '__all__'


class DestinationFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = '__all__'

class DestinationOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Destination
        fields = ['id', 'title']


class ProgressListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress
        fields = '__all__'

class ProgressFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress
        fields = '__all__'

class ProgressOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Progress
        fields = '__all__'


class QuizListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = '__all__'


class QuizFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = '__all__'


class QuizOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = ['id', 'title']



class RewardListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reward
        fields = '__all__'


class RewardFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reward
        fields = '__all__'
