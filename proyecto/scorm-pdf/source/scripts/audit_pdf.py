"""Compare published Rise text with a PDF exported with solutions enabled."""
import base64
import json
import pathlib
import re
import sys
import zipfile
from html.parser import HTMLParser
import pymupdf

class Text(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
    def handle_data(self, value):
        self.parts.append(value)

def normalize(value):
    return re.sub(r'\W', '', value).lower()

fields = {'heading', 'paragraph', 'description', 'title', 'caption', 'transcript', 'matchTitle', 'feedback', 'feedbackCorrect', 'feedbackIncorrect'}
skip = {'settings', 'metadata', 'originalImage', 'aiImageGenSettings', 'aiAudioSettings', 'author'}
segments = []

def collect(node):
    if isinstance(node, list):
        for item in node:
            collect(item)
    elif isinstance(node, dict):
        for key, value in node.items():
            if key in fields and isinstance(value, str):
                parser = Text()
                parser.feed(value)
                segments.extend(part for part in parser.parts if len(part.strip()) > 12)
            elif key not in skip:
                collect(value)

with zipfile.ZipFile(sys.argv[1]) as package:
    name = next(n for n in package.namelist() if n.endswith('/runtime-data.js'))
    source = package.read(name).decode('utf-8')
    payload = re.search(r'__jsonp\("[^"]+","([^"]+)"', source)[1]
    course = json.loads(base64.b64decode(payload))['course']
collect(course.get('description'))
for lesson in course['lessons']:
    collect({'title': lesson['title'], 'description': lesson.get('description', '')})
    for block in lesson['items']:
        if block['type'] != 'divider':
            collect(block)

document = pymupdf.open(sys.argv[2])
text = ''.join(page.get_text(clip=pymupdf.Rect(0, 0, 596, 785)) for page in document)
# PDF text order can place a list marker between two visual lines of one item.
text = re.sub(r'(?m)^\s*(?:\d+|[a-z])\.\s*$', '', text)
normalized = normalize(text)
missing = [part for part in segments if normalize(part) not in normalized]
out = pathlib.Path(sys.argv[2]).parent / 'pdf-pages'
out.mkdir(exist_ok=True)
for index, page in enumerate(document):
    page.get_pixmap(matrix=pymupdf.Matrix(.8, .8)).save(out / f'{index+1:02}.png')
print(json.dumps({'pages': len(document), 'checkedSegments': len(segments), 'missing': missing, 'imagePlacements': sum(len(p.get_images()) for p in document)}, ensure_ascii=True, indent=2))
sys.exit(1 if missing else 0)
