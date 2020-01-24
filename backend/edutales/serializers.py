from rest_framework import serializers

from .models import *
from .models import Reward, Media


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
        fields = ['id', 'user_name', 'year_of_birth', 'game', 'progress', 'reward', 'parent']


class ChildFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ['id', 'user_name', 'year_of_birth', 'game', 'progress', 'reward', 'parent']


class ChildOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ['user_name', 'parent']  # '__all__'


class ChildParentRelation(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ['id', 'user_name']


class ParentListSerializer(serializers.ModelSerializer):
    children = ChildParentRelation(many=True)

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
        fields = ['id', 'name']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))


class TaleQuizRelation(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'


class TaleListSerializer(serializers.ModelSerializer):
    quiz = TaleQuizRelation()

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
        fields = '__all__'


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
        fields = '__all__'


class RewardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = '__all__'


class LanguageOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


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
        fields = '__all__'


class GameOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'


class TaleQuizSerializer(serializers.ModelSerializer):
    quiz_question = serializers.SerializerMethodField()
    answer_answer = serializers.SerializerMethodField()

    class Meta:
        model = Tale
        fields = ['id', 'title', 'text', 'quiz_question', 'answer_answer']

    def get_quiz_question(self, obj):
        return obj.quiz.question if obj.quiz else ''

    def get_answer_answer(self, obj):
        return obj.answer.answer if obj.answer else ''


class TaleQuizSerializer(serializers.ModelSerializer):
    quiz_question = serializers.SerializerMethodField()
    quiz_answer = serializers.SerializerMethodField()
    quiz_true = serializers.SerializerMethodField()
    quiz_points = serializers.SerializerMethodField()

    class Meta:
        model = Tale
        fields = ['id', 'title', 'text', 'quiz_question', 'quiz_answer', 'quiz_true', 'quiz_points']

    def get_quiz_question(self, obj):
        return obj.quiz.question if obj.quiz else ''

    def get_quiz_answer(self, obj):
        return obj.quiz.answer if obj.quiz else ''

    def get_quiz_true(self, obj):
        return obj.quiz.isTrue if obj.quiz else ''

    def get_quiz_points(self, obj):
        return obj.quiz.points if obj.quiz else ''


class RewardListSerializer(serializers.ModelSerializer):
    history_title = serializers.SerializerMethodField()
    tale_title = serializers.SerializerMethodField()

    # tale_pictures = serializers.SerializerMethodField()

    class Meta:
        model = Reward
        fields = ['id', 'name', 'history_title', 'tale_title']  # , 'tale_pictures']

    def get_history_title(self, obj):
        return obj.history.title if obj.history else ''


class GameOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'


class TaleQuizSerializer(serializers.ModelSerializer):
    quiz_question = serializers.SerializerMethodField()
    quiz_true = serializers.SerializerMethodField()

    class Meta:
        model = Tale
        fields = ['id', 'title', 'text', 'quiz_question', 'quiz_true']

    def get_quiz_question(self, obj):
        return obj.quiz.question if obj.quiz else ''

    def get_quiz_true(self, obj):
        return obj.quiz.isTrue if obj.quiz else ''


class RewardListSerializer(serializers.ModelSerializer):
    history_title = serializers.SerializerMethodField()
    tale_title = serializers.SerializerMethodField()

    # tale_pictures = serializers.SerializerMethodField()

    class Meta:
        model = Reward
        fields = ['id', 'name', 'history_title', 'tale_title', 'pictures']  # , 'tale_pictures']

    def get_history_title(self, obj):
        return obj.history.title if obj.history else ''

    def get_tale_title(self, obj):
        return obj.tale.title if obj.tale else ''

    # def get_tale_pictures(self, obj):
    # return obj.tale.pictures if obj.tale else ''


class RewardFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reward
        fields = '__all__'


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'
