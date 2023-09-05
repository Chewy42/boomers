from flask import Flask, request
import fitz
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello, World!'

@app.route('/extract_text/pdf', methods=['POST'])
def extract_text_pdf():
    pdf = request.files['pdf']
    doc = fitz.open(stream=pdf.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.getText()
    return text
    


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
