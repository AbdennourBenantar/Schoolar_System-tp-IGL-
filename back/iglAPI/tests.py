from django.test import TestCase


from rest_framework.test import APIRequestFactory
from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from . import apiviews
from django.urls import reverse


class TestStudentGet(APITestCase):

    def setUp(self):
        self.client = APIClient
        self.factory = APIRequestFactory()
        self.view = apiviews.StudentsList.as_view()
        self.uri = '/studentsList/'

    def test_list(self):
        request = self.factory.get(self.uri)
        response = self.view(request)
        self.assertEqual(response.status_code, 200,'Expected Response Code 200, received {0} instead.'.format(response.status_code))



class TestGroup(APITestCase):

    def setUp(self):
        self.client = APIClient
        self.factory = APIRequestFactory()
        self.view = apiviews.GroupList.as_view()
        self.uri = '/group/1'

    def test_list(self):
        request = self.factory.get(self.uri)
        response = self.view(request)
        self.assertEqual(response.status_code, 200,'Expected Response Code 200, received {0} instead.'.format(response.status_code))


class TestModule(APITestCase):

    def setUp(self):
        self.client = APIClient
        self.factory = APIRequestFactory()
        self.view = apiviews.ModulesList.as_view()
        self.uri = 'modulesList/'

    def test_list(self):
        request = self.factory.get(self.uri)
        response = self.view(request)
        self.assertEqual(response.status_code, 200,'Expected Response Code 200, received {0} instead.'.format(response.status_code))


class TestStudentDetails(APITestCase):

    def setUp(self):
        self.client = APIClient
        self.factory = APIRequestFactory()
        self.view = apiviews.ModulesList.as_view()
        self.uri = 'studentDetails/1'

    def test_list(self):
        request = self.factory.get(self.uri)
        response = self.view(request)
        self.assertEqual(response.status_code, 200,'Expected Response Code 200, received {0} instead.'.format(response.status_code))

class TestModuleCreate(APITestCase):

    def setUp(self):
        self.client = APIClient
        self.factory = APIRequestFactory()
        self.view = apiviews.ModulesList.as_view()
        self.uri = 'createModule/'

    def test_create(self):
        request = self.factory.get(self.uri,{
		  "coef": 5,
		  "name": "IGL",
		"teacher" : "Zellagui",
		"student" : 2 
		}
)
        response = self.view(request)
        self.assertEqual(response.status_code, 200,'Expected Response Code 200, received {0} instead.'.format(response.status_code))


