from django.conf.urls import url, include
from . import views

urlpatterns = [
    url( r'^$' , views.index , name="index" ),
    url( r'^login$' , views.login , name="login" ),
    url( r'^registration$' , views.registration , name="registration" ),
    url( r'^add$' , views.add , name="add" ),
    url( r'^logout$' , views.logout , name="add" )
]