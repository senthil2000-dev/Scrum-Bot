import os
import uvicorn
from fastapi import FastAPI
from dotenv import load_dotenv

from app.database import connectDb
from routes.auth import router as member_router
from fastapi.middleware.cors import CORSMiddleware
load_dotenv()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

app = FastAPI()

origins = ["http://localhost:5000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(member_router, tags=["auth"], prefix="/auth")


def setup():
    connectDb(os.environ.get("MONGO_URI"))


setup()


@app.get("/", tags=["Root"], response_description="Hello World")
async def read_root():
    return {"message": "Hello World"}
