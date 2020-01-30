# EduTales 

SWENGS Project. With our website we want to arouse the interest of children in history by connecting fairy tales with historical stories and presenting them in a playful way. The navigation is done by a simple world map. The country in which the user is located is determined. Then it is suggested whether, and the user can visit the determined country or another. It is intended to provice an interesting overview of activities and their history. The user can find out more and more historical background by browsing through different stations. In addition, sagas or fairy tales on the respective topic can be listed to teach the childrenn more about the history inn this topic. Through small tasks at the end of each station, children can collect rewards and export their results as a certificate at the end. In order to offer a varied experience some parts of the website can be easily changed.

German is used as the language for the content, so the target group are initially only children who speak or can read German. Translations into other languages are not planned in the project as this goes beyond the scope of the project. 

<p align="center">
  <img width="200" height="200" src=https://github.com/deliserdsstfu/edutales/blob/master/logo_large.png?raw=true>
</p>

## Team Members
- Michael Brunner
- Patrick Sacher
- Clemens Strasser
- Claudia Vötter

### FH-JOANNEUM lecturer
- Stefan Krausler-Baumann
- Karl Kreiner


## Requirements
**Python 3.7**

> Get [HERE](https://www.python.org/downloads/) for **MAC**

> Get [HERE](https://www.wikihow.com/Install-Python-on-Windows) for **Windows**

**Homebrew** (for MAC)
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
**virtualenv**
```bash
pip install virtualenv
```
**npm**

> Get [HERE](https://nodejs.org/)

**Angular CLI**
```bash
npm install -g @angular/cli
```
**IntelliJ IDEA**

> Get [HERE](https://www.jetbrains.com/idea/download/?gclid=Cj0KCQiAmZDxBRDIARIsABnkbYQoAQd_Fdq_3xvTysNcmjpuOQFlEcJDKHZClNqqutfFywDCfqnc1ewaAuA7EALw_wcB#section=mac) for Windows, MAC and Linux

**PyCharm** (Alternative for IntelliJ IDEA) (Backend-Development)

> Get [HERE](https://www.jetbrains.com/pycharm/download/?gclid=Cj0KCQiAmZDxBRDIARIsABnkbYQ3s6g7aQBGp0bhPAwEGQql45vyLK-s_WD7CyuTEuy0loX0LX1_-fIaAnZyEALw_wcB#section=mac) for Windows, MAC and Linux

**WebStorm** (Alternative for IntelliJ IDEA) (Frontend-Development)

> Get [HERE](https://www.jetbrains.com/webstorm/download/?gclid=Cj0KCQiAmZDxBRDIARIsABnkbYQh0CAw_NJ2stLpvqywIAGTgB6gBUD679HLSsITKNjMBasJLeykCB4aAqiOEALw_wcB&gclsrc=aw.ds#section=mac) for Windows, MAC and Linux


## Installation for Developers
 - Clone this repository to your local machine
 - Add Python Support in **IntelliJ IDEA**
    - Configure -> Plugins -> Install Python Community Edition 

### Import in IDE IntelliJ (Tested with Version 2019.2.4, Version 2019.3)
- Open IntelliJ
  - File -> Open -> Select **backend** directory -> OK (if requested **open in new window**)
  - File -> Open -> Select **frontend** direcotry -> OK (if reuqested **open in new window**)
- Switch to **backend**
  - Select Python interpreter in File -> Preferences -> Project: backend -> Project Interpreter
  - Install following requirements from **requirements.txt** in backend/
    - django==2.2.7
    - djangorestframework==3.10.3
    - drf-yasg==1.17.0
    - djangorestframework-jwt==1.11.0
  - Install bad-words ```npm install bad-words```
  - Install Weasyprint **MAC**
    - Django Weasyprint ```pip install -U django-weasyprint```
    - Install Cairo ```brew install cairo```
    - (If needed for Cairo install xcode-select ```xcode-select --install``` and run Install cairo again)
    - Install Pango ```brew install pango```
  - Install Weasyprint **Windows**
    - Follow instructions from the official Weasyprint Documentation [HERE](https://weasyprint.readthedocs.io/en/latest/) 

  
- Switch to **frontend**
  - use ```npm install``` to install all required libraries
  
### Alternative Import in PyCharm (Backend) (Tested with Version 2019.2.3)
- Open PyCharm
  - File -> Open -> Select **frontend** direcotry -> OK (if reuqested **open in new window**)
  - Then follow the instructions from **IntelliJ backend**

### Alternative Import in WebStorm (Frontent) (Tested with Version 2019.3)
- Open PyCharm
  - File -> Open -> Select **backend** directory -> OK (if requested **open in new window**)
  - Then follow the instructions from **IntelliJ frontend**

### Run Project in IDE
  - **backend**: Start **Django Application** (IntelliJ or PyCharm)
  - run server
```bash
python manage.py runserver
```
  - make migrations
```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```
  - loaddata for **Mac**
```bash
venv/bin/python manage.py loaddata db.json
venv/bin/python manage.py loaddata auth.json
```
  - loaddata for **Windows**
```bash
venv\Scripts\python.exe manage.py db.json
venv\Scripts\python.exe manage.py auth.json
```
  - Check application running on http://localhost:8000/admin in browser
    - Default Admin:
      - User: admin
      - Password: admin
  - **frontend**: Start via **Angular CLI Server** (IntelliJ or WebStorm)
    - Check application running on http://localhost:4200 in browser
      - Default Admin:
          - User: admin
          - Password: admin
      - Default User (Parent):
          - User: johndoe
          - Password: Pa55w.rd
          
**Angular Google Maps (AGM)**

> Follow instructions [HERE](https://angular-maps.com/)

### Browser
  - For PDF-Export with Weasyprint (of children) you have to deactivate any PugIn that can block a PopUp
  
### Mobile
  - Basic compatibility for mobile devices
