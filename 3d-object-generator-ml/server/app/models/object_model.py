from sqlalchemy import Column, Integer, String
from app.db.db_session import Base

class ObjectModel(Base):
    __tablename__ = "objects"
    id = Column(Integer, primary_key=True, index=True)
    vertices = Column(String)