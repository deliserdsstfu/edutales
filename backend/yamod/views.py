from django.contrib.auth.decorators import permission_required
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from yamod.models import Country, Movie, Person, Media
from yamod.serializers import CountryOptionSerializer, MovieListSerializer, MovieFormSerializer, PersonOptionSerializer, \
    MediaSerializer


@swagger_auto_schema(method='GET', responses={200: CountryOptionSerializer(many=True)})
@api_view(['GET'])
def country_option_list(request):
    countries = Country.objects.all()
    serializer = CountryOptionSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: MovieListSerializer(many=True)})
@api_view(['GET'])
@permission_required('yamod.view_movie', raise_exception=True)
def movies_list(request):
    countries = Movie.objects.all()
    serializer = MovieListSerializer(countries, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=MovieFormSerializer, responses={200: MovieFormSerializer()})
@api_view(['POST'])
@permission_required('yamod.add_movie', raise_exception=True)
def movie_form_create(request):
    serializer = MovieFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=MovieFormSerializer, responses={200: MovieFormSerializer()})
@api_view(['PUT'])
@permission_required('yamod.change_movie', raise_exception=True)
def movie_form_update(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'error': 'Movie does not exist.'}, status=404)

    serializer = MovieFormSerializer(movie, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: MovieFormSerializer()})
@api_view(['GET'])
@permission_required('yamod.view_movie', raise_exception=True)
def movie_form_get(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'error': 'Movie does not exist.'}, status=404)

    serializer = MovieFormSerializer(movie)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_required('yamod.delete_movie', raise_exception=True)
def movie_delete(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Country.DoesNotExist:
        return Response({'error': 'Movie does not exist.'}, status=404)
    movie.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: PersonOptionSerializer(many=True)})
@api_view(['GET'])
def person_option_list(request):
    people = Person.objects.all()
    serializer = PersonOptionSerializer(people, many=True)
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
        serializer = MediaSerializer(data=file_input)
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


@swagger_auto_schema(method='GET', responses={200: MediaSerializer()})
@api_view(['GET'])
def media_get(request, pk):
    try:
        media = Media.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'error': 'Media does not exist.'}, status=404)

    serializer = MediaSerializer(media)
    return Response(serializer.data)