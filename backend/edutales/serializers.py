from rest_framework import serializers
from .models import Region, Tale, Parent, Reward, Child, Quiz


class RegionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
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



class QuizFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz

