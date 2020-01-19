from django.contrib.auth.decorators import permission_required
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage
from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import views
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from edutales.models import *
from edutales.serializers import *


@swagger_auto_schema(method='GET', responses={200: RegionOptionSerializer(many=True)})
@api_view(['GET'])
def region_option_list(request):
    regions = Region.objects.all()
    serializer = RegionOptionSerializer(regions, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: GameTypeOptionSerializer(many=True)})
@api_view(['GET'])
def gametype_option_list(request):
    gametypes = GameType.objects.all()
    serializer = GameTypeOptionSerializer(gametypes, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: QuizListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_quiz', raise_exception=True)
def quiz_list(request):
    quizs = Quiz.objects.all()
    serializer = QuizListSerializer(quizs, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=QuizFormSerializer, responses={200: QuizFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_quiz', raise_exception=True)
def quiz_form_create(request):
    serializer = QuizFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=QuizFormSerializer, responses={200: QuizFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_quiz', raise_exception=True)
def quiz_form_update(request, pk):
    try:
        quiz = Quiz.objects.get(pk=pk)
    except Quiz.DoesNotExist:
        return Response({'error': 'Quiz does not exist.'}, status=404)

    serializer = QuizFormSerializer(quiz, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_quiz', raise_exception=True)
def quiz_delete(request, pk):
    try:
        quiz = Quiz.objects.get(pk=pk)
    except Quiz.DoesNotExist:
        return Response({'error': 'Quiz does not exist.'}, status=404)
    quiz.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: QuizFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_quiz', raise_exception=True)
def quiz_form_get(request, pk):
    try:
        quiz = Quiz.objects.get(pk=pk)
    except Quiz.DoesNotExist:
        return Response({'error': 'Quiz does not exist.'}, status=404)

    serializer = QuizFormSerializer(quiz)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: TaleListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_tale', raise_exception=True)
def tale_list(request):
    tales = Tale.objects.all()
    serializer = TaleListSerializer(tales, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=TaleFormSerializer, responses={200: TaleFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_tale', raise_exception=True)
def tale_form_create(request):
    serializer = TaleFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=TaleFormSerializer, responses={200: TaleFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_tale', raise_exception=True)
def tale_form_update(request, pk):
    try:
        tale = Tale.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)

    serializer = TaleFormSerializer(tale, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_tale', raise_exception=True)
def tale_delete(request, pk):
    try:
        tale = Tale.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)
    tale.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: TaleFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_tale', raise_exception=True)
def tale_form_get(request, pk):
    try:
        tale = Tale.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Tale does not exist.'}, status=404)

    serializer = TaleFormSerializer(tale)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: DestinationListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_destination', raise_exception=True)
def destination_list(request):
    destinations = Destination.objects.all()
    serializer = DestinationListSerializer(destinations, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=DestinationFormSerializer, responses={200: DestinationFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_destination', raise_exception=True)
def destination_form_create(request):
    serializer = DestinationFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=DestinationFormSerializer, responses={200: DestinationFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_destination', raise_exception=True)
def destination_form_update(request, pk):
    try:
        destination = Destination.objects.get(pk=pk)
    except Destination.DoesNotExist:
        return Response({'error': 'Destination does not exist.'}, status=404)

    serializer = DestinationFormSerializer(destination, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_destination', raise_exception=True)
def destination_delete(request, pk):
    try:
        destination = Destination.objects.get(pk=pk)
    except Destination.DoesNotExist:
        return Response({'error': 'Destination does not exist.'}, status=404)
    destination.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: DestinationFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_destination', raise_exception=True)
def destination_form_get(request, pk):
    try:
        destination = Destination.objects.get(pk=pk)
    except Destination.DoesNotExist:
        return Response({'error': 'Destination does not exist.'}, status=404)

    serializer = DestinationFormSerializer(destination)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ProgressListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_progress', raise_exception=True)
def progress_list(request):
    progresss = Progress.objects.all()
    serializer = ProgressListSerializer(progresss, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=ProgressFormSerializer, responses={200: ProgressFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_progress', raise_exception=True)
def progress_form_create(request):
    serializer = ProgressFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ProgressFormSerializer, responses={200: ProgressFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_progress', raise_exception=True)
def progress_form_update(request, pk):
    try:
        progress = Progress.objects.get(pk=pk)
    except Progress.DoesNotExist:
        return Response({'error': 'Progress does not exist.'}, status=404)

    serializer = ProgressFormSerializer(progress, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_progress', raise_exception=True)
def progress_delete(request, pk):
    try:
        progress = Progress.objects.get(pk=pk)
    except Progress.DoesNotExist:
        return Response({'error': 'Progress does not exist.'}, status=404)
    progress.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: ProgressFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_progress', raise_exception=True)
def progress_form_get(request, pk):
    try:
        progress = Progress.objects.get(pk=pk)
    except Progress.DoesNotExist:
        return Response({'error': 'Progress does not exist.'}, status=404)

    serializer = ProgressFormSerializer(progress)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: ChildListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_child', raise_exception=True)
def child_list(request):
    childs = Child.objects.all()
    serializer = ChildListSerializer(childs, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=ChildFormSerializer, responses={200: ChildFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_child', raise_exception=True)
def child_form_create(request):
    serializer = ChildFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ChildFormSerializer, responses={200: ChildFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_child', raise_exception=True)
def child_form_update(request, pk):
    try:
        child = Child.objects.get(pk=pk)
    except Child.DoesNotExist:
        return Response({'error': 'Child does not exist.'}, status=404)

    serializer = ChildFormSerializer(child, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_child', raise_exception=True)
def child_delete(request, pk):
    try:
        child = Child.objects.get(pk=pk)
    except Child.DoesNotExist:
        return Response({'error': 'Child does not exist.'}, status=404)
    child.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: ChildFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_child', raise_exception=True)
def child_form_get(request, pk):
    try:
        child = Child.objects.get(pk=pk)
    except Child.DoesNotExist:
        return Response({'error': 'Child does not exist.'}, status=404)

    serializer = ChildFormSerializer(child)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: ChildOptionSerializer(many=True)})
@api_view(['GET'])
def child_option_list(request):
    children = Child.objects.all()
    serializer = ChildOptionSerializer(children, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='GET', responses={200: GameOptionSerializer(many=True)})
@api_view(['GET'])
def game_option_list(request):
    game = GameType.objects.all()
    serializer = ChildOptionSerializer(game, many=True)
    return Response(serializer.data)







@swagger_auto_schema(method='GET', responses={200: ParentOptionSerializer(many=True)})
@api_view(['GET'])
def parent_option_list(request):
    parents = Parent.objects.all()
    serializer = ParentOptionSerializer(parents, many=True)
    return Response(serializer.data)



@swagger_auto_schema(method='GET', responses={200: ParentListSerializer(many=True)})
@api_view(['GET'])
@permission_required('edutales.view_parent', raise_exception=True)
def parent_list(request):
    parents = Parent.objects.all()
    serializer = ParentListSerializer(parents, many=True)
    return Response(serializer.data)

@swagger_auto_schema(method='POST', request_body=ParentFormSerializer, responses={200: ParentFormSerializer()})
@api_view(['POST'])
@permission_required('edutales.add_parent', raise_exception=True)
def parent_form_create(request):
    serializer = ParentFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ParentFormSerializer, responses={200: ParentFormSerializer()})
@api_view(['PUT'])
@permission_required('edutales.change_parent', raise_exception=True)
def parent_form_update(request, pk):
    try:
        parent = Parent.objects.get(pk=pk)
    except Parent.DoesNotExist:
        return Response({'error': 'Parent does not exist.'}, status=404)

    serializer = ParentFormSerializer(parent, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_required('edutales.delete_parent', raise_exception=True)
def parent_delete(request, pk):
    try:
        parent = Parent.objects.get(pk=pk)
    except Parent.DoesNotExist:
        return Response({'error': 'Parent does not exist.'}, status=404)
    parent.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: ParentFormSerializer()})
@api_view(['GET'])
@permission_required('edutales.view_parent', raise_exception=True)
def parent_form_get(request, pk):
    try:
        parent = Parent.objects.get(pk=pk)
    except Parent.DoesNotExist:
        return Response({'error': 'Parent does not exist.'}, status=404)

    serializer = ParentFormSerializer(parent)
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
            default_storage.save('reward/' + str(serializer.data['id']), ContentFile(file.read()))
            return Response(serializer.data)
        return Response(serializer.errors, status=400)


def reward_download(request, pk):
    reward = Reward.objects.get(pk=pk)
    data = default_storage.open('reward/' + str(pk)).read()
    content_type = reward.content_type
    response = HttpResponse(data, content_type=content_type)
    original_file_name =reward.original_file_name
    response['Content-Disposition'] = 'inline; filename=' + original_file_name
    return response


@swagger_auto_schema(method='GET', responses={200: RewardSerializer()})
@api_view(['GET'])
def reward_get(request, pk):
    try:
        reward = Reward.objects.get(pk=pk)
    except Tale.DoesNotExist:
        return Response({'error': 'Reward does not exist.'}, status=404)

    serializer = RewardSerializer(reward)
    return Response(serializer.data)
