from pydantic import BaseModel

class Preference(BaseModel):
    name: str
    email: str
    department: str
    meeting_time: str
    remote_preference: str