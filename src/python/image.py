from PIL import ImageDraw, Image
import argparse

# python3 image.py --width 200 --height 200 --text 200 

filename = "./image.png"
parser = argparse.ArgumentParser("image")
parser.add_argument("--width", help=".", type=int)
parser.add_argument("--height", help=".", type=int)
parser.add_argument("--text", help=".", type=str)
args = parser.parse_args()

width, height, text = int(args.width), int(args.height), args.text
image = Image.new("RGBA", (width, height), "#ff0000")
draw = ImageDraw.Draw(image)
draw.text((10, 10), text)
image.save(filename, format="PNG")
