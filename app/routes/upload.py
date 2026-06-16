from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.etl.extract import extract
from app.etl.transform import transform
from app.etl.load import load

router = APIRouter()

UPLOAD_FOLDER = "uploads"
CLEANED_FOLDER = "cleaned"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(CLEANED_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    df = extract(file_path)

    df = transform(df)

    cleaned_file = os.path.join(
        CLEANED_FOLDER,
        f"cleaned_{file.filename}"
    )

    load(df, cleaned_file)

    return {
        "message": "File uploaded successfully",
        "rows": len(df),
        "cleaned_file": cleaned_file
    }