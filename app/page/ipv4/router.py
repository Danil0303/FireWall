from fastapi import APIRouter
from app.page.ipv4.model import IPv4
router_ipv4 = APIRouter(prefix='/ipv4')

@router_ipv4.post("")
async def data_ipv4(data: IPv4):
    pass