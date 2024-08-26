FROM python:alpine

WORKDIR /app

COPY . .

RUN python3 -m pip install --upgrade Pillow defusedxml olefile

CMD python app.py
