from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from app.schemas.object_schema import ObjectCreate, ObjectResponse
from app.db.db_session import get_db
from app.services.object_service import create_object, get_object, generate_3d_object
from pydantic import BaseModel

class Generate3DResponse(BaseModel):
    message: str
    object_id: int
    file_url: str

router = APIRouter()

@router.post("/", response_model=ObjectResponse)
def create_object_route(object_data: ObjectCreate, db: Session = Depends(get_db)):
    db_object = create_object(db, object_data)
    return ObjectResponse.from_orm(db_object)

@router.get("/{object_id}", response_model=ObjectResponse)
def get_object_route(object_id: int, db: Session = Depends(get_db)):
    obj = get_object(db, object_id)
    if obj is None:
        raise HTTPException(status_code=404, detail="Object not found")
    return ObjectResponse.from_orm(obj)

@router.post("/generate-3d/", response_model=Generate3DResponse)
async def generate_3d_object_route(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Validate file type
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(status_code=400, detail="Invalid file type. Only JPEG or PNG are allowed.")
    
    # Read the uploaded image file
    file_bytes = await file.read()

    # Generate 3D object and store it in the database
    db_object = generate_3d_object(file_bytes, db)

    return Generate3DResponse(message="3D object generated", object_id=db_object.id, file_url=db_object.file_url)
