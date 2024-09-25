# EaseTalk-Chatbot

EaseTalk-Chatbot is an AI-powered chatbot application using Gemini AI, with a Flask backend, React frontend, and Node.js authentication system.

## Table of Contents
- [Installation](#installation)
- [Backend Setup (Flask)](#backend-setup-flask)
- [Authentication Setup (Node.js)](#authentication-setup-nodejs)
- [Frontend Setup (React)](#frontend-setup-react)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/k29laksh/EaseTalk-Chatbot.git
cd EaseTalk-Chatbot

```

## Backend Setup (Flask)
1. Navigate to the flask folder:
   ```bash
   cd backend_flask
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the root directory and add:
   ```
   API_KEY=your-gemini-api-key
   ```

5. Run Flask backend:
   ```bash
   flask run
   ```

## Authentication Setup (Node.js)

1. Navigate to the authentication folder:
   ```bash
   cd backend_node
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `auth` directory and add:
   ```
   PORT=
   MONGODB_URI=
   ACCESS_TOKEN_SECRET=
   REFRESH_TOKEN_SECRET=
   ACCESS_TOKEN_EXPIRY=
   REFRESH_TOKEN_EXPIRY=
   ```

4. Run the authentication server:
   ```bash
   npm start
   ```

## Frontend Setup (React)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install React dependencies:
   ```bash
   npm install
   ```

3. Run the React app:
   ```bash
   npm start
   ```

## Usage

1. Open the React app in your browser (typically at http://localhost:3000).
2. Log in using the authentication system.
3. Start chatting with EaseTalk powered by Gemini AI.


