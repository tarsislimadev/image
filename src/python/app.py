from PIL import ImageDraw, Image

image = Image.new('RGBA', (200, 200), '#ff0000')

draw = ImageDraw.Draw(image)

draw.text((10, 10), "hello")

draw.text((10, 25), "world")

image.save("image.png")
