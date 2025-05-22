from flask import Flask, request, send_file
from gtts import gTTS
import uuid
app = Flask(_name_)

@app.route('/speak', methods=['POST'])
def speak():
    data = request.json
    text = data.get("text")

    if not text:
        return {"error": "No text provided"}, 400

    filename = f"{uuid.uuid4()}.mp3"
    tts = gTTS(text)
    tts.save(filename)

    return send_file(filename, mimetype='audio/mpeg')

if _name_ == '_main_':
    app.run(debug=True)
