from flask import Flask, render_template, request
#from spacy import displacy
import spacy
import pl_core_news_md
import de_core_news_md
import uuid
from pathlib import Path

#loading models - polish and german
# nlp_pl = pl_core_news_md.load()
# nlp_de = de_core_news_md.load()
nlp_pl = spacy.load("pl_core_news_md")
nlp_de = spacy.load("de_core_news_md")

app = Flask(__name__)

IMG_PATH = "./static/"

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/process', methods=["POST"])
def process():
    if request.method == 'POST':

        rawtext = request.form['zdanie']
        choice = request.form['jezyk']

        if choice == "polish":
            doc = nlp_pl(rawtext)
        else:
            doc = nlp_de(rawtext)

        # https: // explosion.ai / demos / displacy
        # spacy.displacy.serve(doc, style='dep')

        svg = spacy.displacy.render(doc, style="dep")
        filename = str(uuid.uuid4())+'.svg'
        output_path = Path(IMG_PATH+filename)
        output_path.open("w", encoding="utf-8").write(svg)
        results = filename

    return render_template("index.html", results = results)

if __name__ == '__main__':
    host = '0.0.0.0'
    port = 80
    app.run(host=host, port=port, debug=True)
    # app.run(debug=True)
