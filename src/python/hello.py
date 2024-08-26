from flask import Flask, send_file
from PIL import ImageDraw, Image

app = Flask(__name__)

filename = './image.png'

@app.route("/")
def index_url():
  return "<p>Hello, World!</p>"

@app.route("/image")
def image_url():
  image = Image.new('RGBA', (200, 200), '#ff0000')
  draw = ImageDraw.Draw(image)
  draw.text((10, 10), "hello")
  draw.text((10, 25), "world")
  image.save(filename, format='PNG')
  return send_file(filename, download_name='image.png', mimetype='image/png') # , as_attachment=True)
