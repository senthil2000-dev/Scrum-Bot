import motor.motor_asyncio
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

MONGO_DETAILS = ""

client = AsyncIOMotorClient
database = AsyncIOMotorDatabase


def init_db(mongo_uri): 
  global client
  global database
  print("Setting up database")
  client =  motor.motor_asyncio.AsyncIOMotorClient(mongo_uri)
  database =  client.scrumbot
  return

# student_collection = database.get_collection("students_collection")

