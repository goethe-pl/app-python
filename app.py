#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, url_for, redirect
from markupsafe import escape
# from spacy import displacy
import spacy
import uuid
from pathlib import Path

# loading models - polish and german
# nlp_pl = pl_core_news_md.load()
# nlp_de = de_core_news_md.load()
nlp_pl = spacy.load("pl_core_news_md")
nlp_de = spacy.load("de_core_news_md")

app = Flask(__name__, static_url_path='')
host = '0.0.0.0'
port = 80

IMG_PATH = "./static/svg/"


@app.route('/', methods=['GET', 'POST'])
def index():
    # return app.send_static_file('index.html')
    return redirect('index.html')
    # return redirect('static/index.html')
    # return render_template("index.html")

# http://localhost/svg/pl/Witaj

@app.route('/svg/filename/<language>/<sentence>')
def svg_filename(language='pl', sentence='Witaj w szkole'):
    print(language)
    print(sentence)
    language = escape(language)
    #sentence = escape(sentence)
    if language == "pl":
        doc = nlp_pl(sentence)
    else:
        doc = nlp_de(sentence)
    svg = spacy.displacy.render(doc, style="dep")
    filename = str(uuid.uuid4()) + '.svg'
    output_path = Path(IMG_PATH + filename)
    output_path.open("w", encoding="utf-8").write(svg)
    return filename


@app.route('/svg/blob/<language>/<sentence>')
def svg_blob(language='pl', sentence='Witaj w szkole'):
    print(language)
    print(sentence)
    language = escape(language)
    #sentence = escape(sentence)
    if language == "pl":
        doc = nlp_pl(sentence)
    else:
        doc = nlp_de(sentence)
    svg = spacy.displacy.render(doc, style="dep")
    filename = str(uuid.uuid4()) + '.svg'
    output_path = Path(IMG_PATH + filename)
    output_path.open("w", encoding="utf-8").write(svg)
    return svg

if __name__ == '__main__':
    app.run(host=host, port=port)
    # app.run(debug=True)
