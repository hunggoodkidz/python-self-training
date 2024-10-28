from sqlalchemy.orm import Session
from app.models.object_model import ObjectModel
from app.schemas.object_schema import ObjectCreate
from app.models.ai_model import process_image_to_3d, export_3d_model  # Importing AI processing and export functions

def create_object(db: Session, object_data: ObjectCreate):
    # Create the 3D object in the database
    db_object = ObjectModel(**object_data.dict())
    db.add(db_object)
    db.commit()
    db.refresh(db_object)
    return db_object

def get_object(db: Session, object_id: int):
    return db.query(ObjectModel).filter(ObjectModel.id == object_id).first()

def generate_3d_object(image_bytes: bytes, db: Session):
    # Generate 3D object from image
    vertices = process_image_to_3d(image_bytes)
    
    # Store the object in the database
    db_object = ObjectModel(
        name="Generated 3D Object",
        vertices=vertices
    )
    db.add(db_object)
    db.commit()
    db.refresh(db_object)
    
    # Export 3D object to file (OBJ or GLB)
    file_url = export_3d_model(vertices, file_format="obj")  # Export to OBJ for now
    db_object.file_url = file_url
    db.commit()

    return db_object
