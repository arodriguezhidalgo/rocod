from django.shortcuts import render
from django.http import HttpResponse
from mainapp.models import Gym
# Create your views here.
def index(request):
    if request.method == "POST":
        """The POST request will send information to store in the database"""
        validatePOSTContent(request.POST);        
    if request.method == "GET":
        print("I get a GET")    
    context = {};
    return render(request, "gyms/index.html", context);

def validatePOSTContent(post):
    """ This function receives a post and creates a database entry from it. """

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


    # Create a new entry.
    q = Gym(
        name = dbEntryDict["name"],        
        address = dbEntryDict["address"],
        country = dbEntryDict["country"],
        post_code = dbEntryDict["post_code"],
        description = dbEntryDict["description"],
        );
    q.save();
    # print(dbEntryDict)



        
    
    