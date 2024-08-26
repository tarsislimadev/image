FROM python:slim

RUN apt update -y && apt install -y binutils

WORKDIR /app

COPY . .

RUN python3 -m pip install --upgrade flet defusedxml olefile argparse Flask Pillow PyInstaller

ENV FLASK_DEBUG=1

CMD flask --app image.py run --host=0.0.0.0
