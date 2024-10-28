from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ObjectBase(BaseModel):
    name: str
    description: Optional[str] = None

class ObjectCreate(BaseModel):
    name: str
    description: str
    vertices: List[List[float]]  # List of lists of floats

class ObjectResponse(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    vertices: list  # Assuming your vertices is a list of coordinates
    file_url: Optional[str] = None
    created_at: Optional[str] = None  # Updated to handle the datetime conversion
    updated_at: Optional[str] = None

    class Config:
        orm_mode = True

    @classmethod
    def from_orm(cls, obj):
        return cls(
            id=obj.id,
            name=obj.name,
            description=obj.description,
            vertices=obj.vertices,
            file_url=obj.file_url,
            created_at=obj.created_at.isoformat() if obj.created_at else None,
            updated_at=obj.updated_at.isoformat() if obj.updated_at else None
        )
