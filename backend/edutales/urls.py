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
    path('quiz/create', views.quiz_form_create),
    path('tale/<int:pk>/get', views.tale_form_get),
    path('tale/<int:pk>/update', views.tale_form_update),
    path('tale/<int:pk>/delete', views.tale_delete),
    path('parent/options', views.parent_option_list),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^reward$', FileUploadView.as_view()),
    path('reward/<int:pk>', views.reward_download),
    path('reward/<int:pk>/get', views.reward_get),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
