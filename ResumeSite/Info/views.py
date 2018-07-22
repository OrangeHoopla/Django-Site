from django.shortcuts import render

def index(request):
	return render(request, 'Content/better.html')
