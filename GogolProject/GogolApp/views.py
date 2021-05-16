from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, "GogolApp/index.html")

def image_search(request):
    return render(request, "GogolApp/image-srch.html")

def advanced_search(request):
    return render(request, "GogolApp/advancedSearch.html")