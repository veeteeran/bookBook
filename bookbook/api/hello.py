from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from json import loads

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello():
  return make_response({ 'message': 'python route' })