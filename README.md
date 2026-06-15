## Smart Meeting System
## Project Description

Smart Meeting System is a full-stack web application designed to manage employee preferences, upload and process Excel files using ETL pipeline, and handle meeting scheduling. It is built using **React (TypeScript)** for the frontend and **FastAPI** for the backend.

## Features

* Employee Preference Intake Form with validation (React Hook Form + Zod)
* File Upload system for Excel files
* ETL processing using Pandas and OpenPyXL
* REST APIs for preferences, uploads, and meetings
* Meeting scheduling backend APIs
* Clean and responsive UI using Material UI (MUI)

## Tech Stack

## Frontend

* React (Vite)
* TypeScript
* Material UI (MUI)
* React Hook Form
* Zod
* Axios

## Backend

* FastAPI
* Python
* Pydantic
* Pandas
* OpenPyXL

## Project Structure
```text
smart-meeting-system/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │    ├── preference.py
│   │   │    ├── upload.py
│   │   │    └── calendar.py
│   │   ├── etl/
│   │   ├── schemas/
│   │
│   ├── uploads/
│   ├── cleaned/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── main.tsx
│
└── README.md
```
## Installation & Setup

## Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install fastapi uvicorn pandas openpyxl python-multipart

Run backend server:
uvicorn app.main:app --reload

Backend runs at:
http://127.0.0.1:8000

## Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173

## API Endpoints

## Preferences

* POST `/preferences` → Save employee preference
* GET `/preferences` → Get all preferences

## File Upload

* POST `/upload` → Upload Excel file and process ETL

## Meetings

* POST `/meetings` → Create meeting
* GET `/meetings` → Fetch meetings

## ETL Pipeline (Data Flow)

1. Upload Excel file from frontend
2. Backend extracts data using Pandas
3. Data is cleaned and validated
4. Cleaned file is stored in `/cleaned` folder

## Important Notes

* Backend must be running before starting frontend
* Ensure API base URL in frontend is:

  http://127.0.0.1:8000

## Future Improvements

* Add authentication (JWT login system)
* Integrate database (PostgreSQL / MongoDB)
* Full calendar UI integration
* Dashboard analytics
* Deployment (Vercel + Render)

## Author

Built as a Full Stack Learning Project using:
* React + TypeScript
* FastAPI
* ETL Data Processing
