from rest_framework import serializers
from .models import Region, Tale, Parent, Media


class CountryOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['id', 'name']


class MovieListSerializer(serializers.ModelSerializer):
    country_name = serializers.SerializerMethodField()

    class Meta:
        model = Tale
        fields = ['id', 'title', 'genre', 'country_name']

    def get_country_name(self, obj):
        return obj.country.name if obj.country else ''


class MovieFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tale
        fields = '__all__'


class PersonOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Parent
        fields = ['id', 'name']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'
