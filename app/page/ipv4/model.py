from pydantic import BaseModel, Field

class IPv4(BaseModel):
    ip: list = Field(...)
    dateFrom: str = Field(...)
    dateTo: str = Field(...)