# server/app/services/ml_service.py
import numpy as np

def generate_3d_object():
    # Returns vertices of a cube for now
    return np.array([
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],  # bottom
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]       # top
    ]).tolist()
