import logging
from pydantic import BaseModel, Field
from typing import Any, List, Optional, Union
from mongoengine import ObjectIdField
from bson import ObjectId



from schema.members import MemberInDBSchema, memberHelper
from schema.dbmodel import PyObjectId

from models.members import Member
from models.messages import Message

class CreateMessageSchema(BaseModel):
    """Message Schema"""

    messageId: str = Field(...)
    message: str = Field(...)
    tags: Optional[List[str]] = []
    isReply: bool = Field(False)
    replies = []
    author : str = Field(...)
    parentMessage: Optional[str]

    # TODO: v v imp
    # ? Add validators to thw schema
    class Config:
        schema_extra = {
            # TODO: Kinda not clean, fix it
            "examples" : {
                "normalMessageSchema": {
                    "messageId": "unique id of the message",
                    "message" : "content of the message, length should be more then 20 characters",
                    "author": "discord handle of the user",
                    "tag": ["an", "array", "of", "all", "the", "tags"],
                },
                "normalMessage": {
                    "messageId": "12334",
                    "message" : "This is the message content",
                    "author": "joe#1234",
                    "tags": ["an", "array", "of", "all", "the", "tags"],
                },
                "ReplySchema": {
                    "messageId": "unique id of the message",
                    "message" : "content of the reply, more than 20 characters long",
                    "author": "discord handle of the message author",
                    "isReply": "True",
                    "parentMessage" : "unique id of the message of the parent message "
                },
                "Reply": {
                    "messageId": "12335",
                    "message" : "This is the content content of the reply",
                    "author": "joemama#1234",
                    "isReply": "True",
                    "parentMessage" : "12334"
                }
            }
        }


class UpdateMessageSchema(BaseModel):
    """ Update message schema """
    
    messageId : str = Field(...)
    message: Optional[str] = None
    tags: Optional[List[str]] = None

    class Config:
        schema_extra =  {
            "examples": {
                "schema": {
                    "messageId": "unique id of the message you want to edit",
                    "message": "Content of the message",
                    "tag": ["an", "array", "of", "all", "the", "tags"],
                },
                "example_request" : {
                    "messageId": "12334",
                    "message" : "This is the edited message content",
                    "tags": ["an", "array", "of", "all", "the", "tags"],
                }
            }
        }

class DeleteMessageSchema(BaseModel):
    """ Delete message schema """
    
    messageId : str = Field(...)

    class Config:
        schema_extra =  {
            "examples" : {
                "schema": {
                    "messageId": "unique id of the message you want to edit",
                },
                "example_request" : {
                    "messageId": "12334",
                }
            }
        }


class MessageInDbSchema(BaseModel):
    messageId : Union[PyObjectId, str] = Field(...)
    mongoDocument: Optional[Any] = None

    message: str = Field(...)
    tags: Optional[List[str]]
    author: Union[Any, MemberInDBSchema]
    isDiscussion: bool = Field(True)
    replies: List["MessageInDbSchema"] = []
    parentMessage: "MessageInDbSchema" = None

    def changeAuthorToPydanticSchema(self):
        try:
            assert isinstance(self.author, Member)
            self.author = MemberInDBSchema(**memberHelper(self.author))
            return
        except AssertionError as _:
            # author is already an instance of MemberInDBSchema, so just return
            return
        except Exception as e:
            logging.error("Couldn't convert author to an instance of 'MemberInDBSchema' due to", e)
            raise Exception("Couldn't convert author to an instance of 'MemberInDBSchema' due to", e)

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {
            ObjectId: str
        }

# https://pydantic-docs.helpmanual.io/usage/postponed_annotations/#:~:text=data%20structures%20with%20self-referencing%20models%20are%20also%20supported%2C%20provided%20the%20function%20update_forward_refs()
MessageInDbSchema.update_forward_refs()

# API Response Models
class CreateMessageResponseModel(BaseModel):
    success : bool = Field(...)


class UpdateMessageResponseModel(CreateMessageResponseModel):
    pass

class DeleteMessageResponseModel(CreateMessageResponseModel):
    pass

def messageHelper(message: Message):
    """Converts a single message document returned by a mongo to a dict"""
    
    messageDict = {
        "messageId": message.messageId,
        "message": message.message,
        "author": MemberInDBSchema(**memberHelper(message.author)),
        "timestamp": message.timeStamp,
        "replies": messageListHelper(message.replies),
        "mongoDocument": message
    }

    messageDict["tags"] = message.tags
    
    if message.parentMessage:
        # messageDict["parentMessage"] = MessageInDbSchema(**messageHelper(message.parentMessage))
        messageDict["isDiscussion"] = False
    

    return messageDict


def messageListHelper(messages: List[Message]):
    """Converts a array of message document returned by a mongo to a list of MessageInDB pydantic obj"""

    if(not messages or len(messages) == 0):
        return []
    
    return [ MessageInDbSchema(**messageHelper(message)) for message in messages]
    