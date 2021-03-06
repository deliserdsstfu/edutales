from django.contrib import admin
from .models import *
from .views import generate_pdf


class TaleAdmin(admin.ModelAdmin):
    display_list = '_all_'


class ParentAdmin(admin.ModelAdmin):
    display_list = '_all_'


class RegionAdmin(admin.ModelAdmin): pass


class QuizAdmin(admin.ModelAdmin): pass




class ChildAdmin(admin.ModelAdmin): pass


class GameTypeAdmin(admin.ModelAdmin): pass


class LanguageAdmin(admin.ModelAdmin): pass


class RewardAdmin(admin.ModelAdmin): pass


class HistoryAdmin(admin.ModelAdmin): pass


class HistoryAdmin(admin.ModelAdmin): pass


admin.site.register(Tale, TaleAdmin)
admin.site.register(Parent, ParentAdmin)
admin.site.register(Region, RegionAdmin)
admin.site.register(Reward, RewardAdmin)
admin.site.register(GameType, GameTypeAdmin)
admin.site.register(Child, ChildAdmin)
admin.site.register(History, HistoryAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Language, LanguageAdmin)

