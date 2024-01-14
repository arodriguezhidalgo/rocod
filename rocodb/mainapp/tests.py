from django.test import TestCase
from mainapp.models import Gym
# Create your tests here.


class GymTestCase(TestCase):
    def test_creates_entry_in_db(self):
        """ Test that we can create an entry in the database."""
        specimenName = "rocket";
        # Create an entry.
        Gym.objects.create(name=specimenName);
    
        # Retrieve the entry.
        entry = Gym.objects.get(name=specimenName);
        self.assertEqual(entry.name, specimenName);

    def test_creates_empty_entries(self):
        """ Test that we cannot create an entry if we don't provide the name. This
        is the minimum required input argument."""
        
        Gym.objects.create()

        self.assertEqual(Gym.objects.get_queryset().__len__(), 1)

    def test_populates_empty_fields_with_default_values(self):
        specimenName = "rocket";
        defaultValue = "<empty>";
         # Create an entry.
        Gym.objects.create(name=specimenName);

        # Retrieve the entry we just created, then assert the default values.
        entry = Gym.objects.get(name=specimenName);


        self.assertEqual(entry.address, defaultValue);
        self.assertEqual(entry.country, defaultValue);
        self.assertEqual(entry.post_code, defaultValue);
        self.assertEqual(entry.description, defaultValue);
     

from django.test import Client
class IntegrationGym(TestCase):
    def test_receives_info_from_form(self):
        c = Client();
        c.post("/gyms/", 
               {"name": "rocket",
                "address": "fake 123"});

        # Get the handle to the model, and check that the entry was successfully created.
        self.assertEqual(Gym.objects.get(pk=1).address, "fake 123");

        # Also, check that the properties that we didn't populate received the default value.
        self.assertEqual(Gym.objects.get(pk=1).post_code, "<default>");
        

        