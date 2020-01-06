from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token

from edutales.views import FileUploadView
from . import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tale/list', views.tale_list),
    path('tale/create', views.tale_form_create),
    path('tale/<int:pk>/get', views.tale_form_get),
    path('tale/<int:pk>/update', views.tale_form_update),
    path('tale/<int:pk>/delete', views.tale_delete),
    path('quiz/list', views.quiz_list),
    path('quiz/create', views.quiz_form_create),
    path('quiz/<int:pk>/get', views.quiz_form_get),
    path('quiz/<int:pk>/update', views.quiz_form_update),
    path('quiz/<int:pk>/delete', views.quiz_delete),
    path('gametype/list', views.gametype_option_list),
    path('region/list', views.region_option_list),
    path('destination/list', views.destination_list),
    path('destination/create', views.destination_form_create),
    path('destination/<int:pk>/get', views.destination_form_get),
    path('destination/<int:pk>/update', views.destination_form_update),
    path('destination/<int:pk>/delete', views.destination_delete),
    path('progress/list', views.progress_list),
    path('progress/create', views.progress_form_create),
    path('progress/<int:pk>/get', views.progress_form_get),
    path('progress/<int:pk>/update', views.progress_form_update),
    path('progress/<int:pk>/delete', views.progress_delete),
    path('child/list', views.child_list),
    path('child/create', views.child_form_create),
    path('child/<int:pk>/get', views.child_form_get),
    path('child/<int:pk>/update', views.child_form_update),
    path('child/<int:pk>/delete', views.child_delete),
    path('parent/list', views.parent_list),
    path('parent/create', views.parent_form_create),
    path('parent/<int:pk>/get', views.parent_form_get),
    path('parent/<int:pk>/update', views.parent_form_update),
    path('parent/<int:pk>/delete', views.parent_delete),
    path('parent/options', views.parent_option_list),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^reward$', FileUploadView.as_view()),
    path('reward/<int:pk>', views.reward_download),
    path('reward/<int:pk>/get', views.reward_get),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
