FROM python:alpine

WORKDIR /app

COPY . .

RUN python3 -m pip install --upgrade Pillow defusedxml olefile Flask

ENV FLASK_DEBUG=1

CMD flask --app hello.py run --host=0.0.0.0
