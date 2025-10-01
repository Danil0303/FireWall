import os.path
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from app.page.ipv4.router import router_ipv4
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    if not os.path.exists("uploads"):
        os.makedirs('uploads', exist_ok=True)
    yield

app = FastAPI(lifespan=lifespan)
app.include_router(router_ipv4)
app.mount('/static', StaticFiles(directory='static'), name='static')
templates = Jinja2Templates(directory="templates")
list = [
        "http://0.0.0.0/:8000"
]
app.add_middleware(
  CORSMiddleware,
  allow_origins = list,
  allow_methods = ["*"],
  allow_headers = ["*"]
)


@app.get('/')
async def home(request: Request):
    return templates.TemplateResponse('index.html', {"request":request})

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("main:app", reload=True)