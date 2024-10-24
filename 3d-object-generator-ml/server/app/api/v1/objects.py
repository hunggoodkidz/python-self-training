from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.db_service import create_object, get_object_by_id
from app.services.ml_service import generate_3d_object
from app.db.db_session import get_db
from app.schemas.object_schema import ObjectResponse


router = APIRouter()

@router.get("/generate-object", response_model=ObjectResponse)
async def generate_object(db: Session = Depends(get_db)):
    vertices = generate_3d_object()
    vertices_str = str(vertices)  # Store as a string for simplicity
    object_record = create_object(db, vertices_str)
    return {"vertices": object_record.vertices}