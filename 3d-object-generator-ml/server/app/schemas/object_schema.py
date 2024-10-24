from pydantic import BaseModel

class ObjectResponse(BaseModel):
    id: int
    name: str
    description: str
