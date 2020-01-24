# Load initial data to database using Django fixtures Windows
venv\Scripts\python.exe manage.py loaddata initial_quizzes

venv\Scripts\python.exe manage.py loaddata initial_tales
venv\Scripts\python.exe manage.py loaddata initial_languages

# Load initial data to database using Django fixtures MacOS
venv/bin/python manage.py loaddata initial_quizzes
venv/bin/python manage.py loaddata initial_languages
