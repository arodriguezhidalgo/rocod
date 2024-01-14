from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    if request.method == "POST":
        """The POST request will send information to store in the database"""
        validatePOSTContent(request.POST);

        print("I got a POST", request.POST)
    if request.method == "GET":
        print("I get a GET")    
    context = {};
    return render(request, "gyms/index.html", context);

def validatePOSTContent(post):
    """ For the index view, the POST should return some of the following fields:
    - name : compulsory
    - address : optional
    - country : optional
    - post_code : optional
    - description : optional"""    

    # Create the dictionary that we will use to create database entries.
    dbEntryDict = {
        "name" : post.get("name"),
        "address" : "",
        "country" : "",
        "post_code" : "", 
        "description" : ""
        };
    
    # Assign any user provided value from the POST to the dictionary for our database.
    for postKey in post.keys():
        dbEntryDict[postKey] = post.get(postKey);

    print(dbEntryDict)


        
    
    