from flask import Flask, jsonify, request
from flask_cors import CORS
from json import loads
# import sys

# print(f'sys.path: {sys.path}')


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Home Page Route'


@app.route('/about')
def about():
    return 'About Page Route'


@app.route('/portfolio')
def portfolio():
    return 'Portfolio Page Route'


@app.route('/contact')
def contact():
    return 'Contact Page Route'


@app.route('/api/<int:id>')
def api(id):
  try:
    with open('data.json', mode='r') as my_file:
      text = my_file.read()

      for t in loads(text):
        if t.get('id') == id:
          return jsonify({'data': t})
          
      return f'ID: {id} not found'
  except Exception:
      return Exception