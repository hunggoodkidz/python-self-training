from sqlalchemy import Column, Integer, String, DateTime, JSON
from sqlalchemy.sql import func
from app.db.db_session import Base

class ObjectModel(Base):
    __tablename__ = "objects"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)  # Name of the 3D object
    description = Column(String, nullable=True)  # Short description
    vertices = Column(JSON, nullable=False)  # Storing vertices as JSON
    file_url = Column(String, nullable=True)  # Optional field for storing URL to the 3D object file
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())