from django.contrib import admin
# from django.utils.translation import ugettext_lazy as _
from django.contrib.admin.sites import site
from .models import Proffesional,Usr,Servicesreq
class profAdmin(admin.ModelAdmin):
    list_display=('name','email','phone','address','qualification','work_experiece','password')
class usrAdmin(admin.ModelAdmin):
    list_display=('name','email','phone','address','password')
class seviceAdmin(admin.ModelAdmin):
    list_display=('name','email','phone','address','services','technician',)

admin.site.register(Proffesional,profAdmin)
admin.site.register(Usr,usrAdmin)
admin.site.register(Servicesreq,seviceAdmin)

# Register your models here.
