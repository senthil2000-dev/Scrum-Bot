import os
from fastapi.param_functions import Depends
import uvicorn
from fastapi import FastAPI, Header, Request, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from app.events import createStartAppHandler, createStopAppHandler
from routes.auth import router as member_router
from routes.bot import router as bot_router
from app.config import FRONTEND_URL
from routes.api import router as api_router

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True, debug=True)

app = FastAPI(debug=True)

origins = [FRONTEND_URL]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(member_router, tags=["auth"], prefix="/auth")
app.include_router(bot_router, tags=["bot"], prefix="/bot")

# app.include_router(member_router, tags=["Auth"], prefix="/auth")
# app.include_router(bot_router, tags=["Bot"], prefix="/bot")
app.include_router(api_router, tags=["Api"], prefix="/api")

app.add_event_handler("startup", createStartAppHandler(app))
app.add_event_handler("shutdown", createStopAppHandler(app))


@app.get("/", tags=["Root"], response_description="Hello World")
async def read_root():
    return {"message": "Hello World"}
