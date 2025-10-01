from fastapi import APIRouter, status, HTTPException
from starlette.status import HTTP_205_RESET_CONTENT, HTTP_500_INTERNAL_SERVER_ERROR, HTTP_204_NO_CONTENT

from app.page.ipv4.model import IPv4
router_ipv4 = APIRouter(prefix='/ipv4')

@router_ipv4.post("")
async def data_ipv4(data: IPv4):
    try:
        if len(data.ip) == 0:
            return HTTPException(status_code=HTTP_205_RESET_CONTENT, detail="ip is not empty!")
        if data.dateFrom >  data.dateTo:
            return HTTPException(status_code=HTTP_204_NO_CONTENT, detail="Проверти даты!")
    except Exception as e:
        return HTTPException(status_code=HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))