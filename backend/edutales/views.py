from django.contrib.auth.decorators import permission_required
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from edutales.models import Region, Tale, Parent
from edutales.serializers import RegionOptionSerializer, TaleListSerializer, TaleFormSerializer, ParentOptionSerializer, \
    RewardSerializer


@swagger_auto_schema(method='GET', responses={200: RegionOptionSerializer(many=True)})
@api_view(['GET'])
def country_option_list(request):
    countries = Region.objects.all()
    serializer = RegionOptionSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: TaleListSerializer(many=True)})
@api_view(['GET'])
@permission_required('yamod.view_movie', raise_exception=True)
def movies_list(request):
    countries = Tale.objects.all()
    serializer = TaleListSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=TaleFormSerializer, responses={200: TaleFormSerializer()})
@api_view(['POST'])
@permission_required('yamod.add_movie', raise_exception=True)
def movie_form_create(request):
    serializer = TaleFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=TaleFormSerializer, responses={200: TaleFormSerializer()})
@api_view(['PUT'])
@permission_required('yamod.change_movie', raise_exception=True)
def movie_form_update(request, pk):
    try:
        movie = Tale.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)

    serializer = TaleFormSerializer(movie, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: TaleFormSerializer()})
@api_view(['GET'])
@permission_required('yamod.view_movie', raise_exception=True)
def movie_form_get(request, pk):
    try:
        movie = Tale.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)

    serializer = TaleFormSerializer(movie)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('yamod.delete_movie', raise_exception=True)
def movie_delete(request, pk):
    try:
        movie = Tale.objects.get(pk=pk)
    except Region.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)
    movie.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: ParentOptionSerializer(many=True)})
@api_view(['GET'])
def person_option_list(request):
    people = Parent.objects.all()
    serializer = ParentOptionSerializer(people, many=True)
    return Response(serializer.data)


class FileUploadView(views.APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        file = request.FILES['file']
        file_input = {
            'original_file_name': file.name,
            'content_type': file.content_type,
            'size': file.size,
        }
        serializer = RewardSerializer(data=file_input)
        if serializer.is_valid():
            serializer.save()
            default_storage.save('media/' + str(serializer.data['id']), ContentFile(file.read()))
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


def media_download(request, pk):
    media = Media.objects.get(pk=pk)
    data = default_storage.open('media/' + str(pk)).read()
    content_type = media.content_type
    response = HttpResponse(data, content_type=content_type)
    original_file_name =media.original_file_name
    response['Content-Disposition'] = 'inline; filename=' + original_file_name
    return response


@swagger_auto_schema(method='GET', responses={200: RewardSerializer()})
@api_view(['GET'])
def media_get(request, pk):
    try:
        media = Media.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Media does not exist.'}, status=404)

    serializer = RewardSerializer(media)
    return Response(serializer.data)
