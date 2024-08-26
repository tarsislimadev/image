from flask import Flask, request, send_file
from PIL import ImageDraw, Image

app = Flask(__name__, static_url_path="", static_folder="public")

filename = "./image.png"

@app.route("/image")
def image_url():
  width, height, text =  int(request.args["width"]), int(request.args["height"]), request.args["text"]
  image = Image.new("RGBA", (width, height), "#ff0000")
  draw = ImageDraw.Draw(image)
  draw.text((10, 10), text)
  image.save(filename, format="PNG")
  return send_file(filename, download_name="image.png", mimetype="image/png")
