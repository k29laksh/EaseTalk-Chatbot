from flask import Flask, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()
import os

# Load API key from environment variable


genai.configure(api_key=os.environ["API_KEY"])

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET'])
def home():
    return "hello"

@app.route('/chat', methods=['POST'])
def chat():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user_input = data.get('message')

            if not user_input:
                return jsonify({'error': 'No message provided'}), 400

            model = genai.GenerativeModel("gemini-1.5-flash")
            response = generate_response(model, user_input)
            return jsonify({'response': response})
        except Exception as e:
            return jsonify({'error': 'An unexpected error occurred: ' + str(e)}), 500

def generate_response(model, user_input):
    try:
        response = model.generate_content(user_input)
        return response.text
    except genai.Error as e:
        return f"Error generating response: {e}"