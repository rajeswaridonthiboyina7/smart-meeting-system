from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

meetings = []

class Meeting(BaseModel):
    title: str
    date: str
    time: str

@router.post("/meetings")
def create_meeting(meeting: Meeting):

    meetings.append(meeting)

    return {
        "message": "Meeting Created Successfully",
        "meeting": meeting
    }

@router.get("/meetings")
def get_meetings():

    return meetings