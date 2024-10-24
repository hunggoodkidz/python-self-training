from fastapi import FastAPI
from app.api.v1.objects import router
from app.db.db_session import engine, Base

# Create the FastAPI instance
app = FastAPI()

# Include the API router
app.include_router(router, prefix="/api/v1")

# Create the tables when the app starts
@app.on_event("startup")
def startup_event():
    Base.metadata.create_all(bind=engine)