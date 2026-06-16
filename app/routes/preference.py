from fastapi import APIRouter
from app.schemas.preference import Preference

router = APIRouter()

preferences = []

@router.post("/preferences")
def save_preference(data: Preference):
    preferences.append(data)
    return {
        "message": "Preference Saved",
        "data": data
    }

@router.get("/preferences")
def get_preferences():
    return preferences