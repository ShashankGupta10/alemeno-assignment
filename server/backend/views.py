from rest_framework.decorators import api_view
from rest_framework.response import Response
import cv2
import numpy as np
from sklearn.cluster import KMeans
from PIL import Image

def fetch_image_from_file(file):
    image = Image.open(file)
    return np.array(image)

def resize_image(image, width):
    height = int(image.shape[0] * (width / float(image.shape[1])))
    return cv2.resize(image, (width, height))

def color_quantization(image, k=10):
    data = np.reshape(image, (-1, 3))
    kmeans = KMeans(n_clusters=k, random_state=42).fit(data)
    colors = kmeans.cluster_centers_
    return colors

@api_view(["POST"])
def result(request):
    file = request.data.get("file")
    if not file:
        return Response({"error": "No image file provided"}, status=400)
    image = fetch_image_from_file(file)
    resized_image = resize_image(image, 600)
    colors = color_quantization(resized_image, k=10)
    colors_list = colors.astype(int).tolist()
    rgb_colors = [f"rgb({color[0]}, {color[1]}, {color[2]})" for color in colors_list]
    return Response({"colors": rgb_colors})