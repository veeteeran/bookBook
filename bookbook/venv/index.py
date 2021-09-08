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

@app.route('/get_list/<int:id>')
def get_list(id):
    from functions.setup_matrices import pivot_table
    from functions.setup_matrices import to_numpy
    from functions.similarity import similar_ratings
    from functions.predictions import predict_ratings
    from functions.parse import get_recommendations
    from models import storage

    ratings_dict, ratings_list = storage.all("BookRatings")
    print("got BookRatings from storage")

    pt = pivot_table(ratings_list)
    print("got pivot table")
    data, user = to_numpy(pt, id)

    print("got numpy.ndarrays")
    data_num = data[1:].astype(int)
    user_num = user[1:].astype(int)
    indices, cos_sim = similar_ratings(data_num, user_num)
    print("got cosine similarities")
    user_predictions, predicted_indices = predict_ratings(
        user, data_num, user_num, indices, cos_sim)

    print("got predicted ratings")
    sorted_ISBNs = get_recommendations(user_predictions, predicted_indices)
    
    print(sorted_ISBNs)

    return sorted_ISBNs