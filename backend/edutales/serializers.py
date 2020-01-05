from rest_framework import serializers
from .models import Region, Tale, Parent, Reward, Child


class RegionOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['id', 'name']


class ChildListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child
        fields = '__all__'


class ChildFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child
        fields = '__all__'


class TaleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = '__all__'


class TaleFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = '__all__'


class ParentOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Parent
        fields = ['id', 'name']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))


class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = '__all__'
