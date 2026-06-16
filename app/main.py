from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.preference import router as preference_router
from app.routes.upload import router as upload_router
from app.routes.calendar import router as calendar_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(preference_router)
app.include_router(upload_router)
app.include_router(calendar_router)


@app.get("/")
def home():
    return {"message": "API Working"}