from datetime import datetime

from pydantic import BaseModel, Field

class IPv4(BaseModel):
    ip: list = Field(...)
    dateFrom: datetime = Field(...)
    dateTo: datetime = Field(...)