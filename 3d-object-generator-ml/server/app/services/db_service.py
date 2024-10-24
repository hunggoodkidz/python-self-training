from sqlalchemy.orm import Session
from app.models.object_model import ObjectModel

def create_object(db: Session, vertices: str):
    """Create a new 3D object record in the database."""
    new_object = ObjectModel(vertices=vertices)
    db.add(new_object)
    db.commit()
    db.refresh(new_object)
    return new_object

def get_object_by_id(db: Session, object_id: int):
    """Retrieve a 3D object by its ID."""
    return db.query(ObjectModel).filter(ObjectModel.id == object_id).first()