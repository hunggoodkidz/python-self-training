import cv2
import numpy as np
import trimesh
from io import BytesIO

def preprocess_image(image_data):
    # Convert image bytes to an OpenCV image
    nparr = np.frombuffer(image_data, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return image

def generate_3d_model(image_data):
    # Preprocess the image
    image = preprocess_image(image_data)
    
    # Placeholder: Use ML or an algorithm to generate vertices from the image
    vertices = np.array([[0, 0, 0], [1, 0, 0], [0, 1, 0]])  # Example vertices
    
    # Create 3D mesh
    mesh = trimesh.Trimesh(vertices=vertices)
    
    # Export as OBJ and GLB
    obj_file = "output.obj"
    glb_file = "output.glb"
    
    mesh.export(obj_file)
    mesh.export(glb_file)
    
    return obj_file, glb_file
