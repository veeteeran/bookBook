#!/usr/bin/env python3
"""
Recommender system model for books, querying from SQLAlchemy models
"""


from functions.setup_matrices import pivot_table
from functions.setup_matrices import to_numpy
from functions.similarity import similar_ratings
from functions.predictions import predict_ratings
from functions.parse import get_recommendations
from models import storage
from sys import argv


if __name__ == "__main__":
    if len(argv) < 2:
        raise TypeError(
            "Missing argument for specific user id to get recs for")
    # gets list of all BookRatings
    # ratings_dict is dictionary of objects
    # ratings_list is list of dictionary representation
    ratings_dict, ratings_list = storage.all("BookRatings")
    print("got BookRatings from storage")
    # creates pivot table from ratings_list
    #    with user IDs as rows, ISBNs as columns
    #    and ratings where user ID and book ISBN meet
    pt = pivot_table(ratings_list)
    # prints pivot table for easy viewing
    # for row in pt:
    # print(row)
    # turns pivot table into numpy.ndarrays
    print("got pivot table")
    data, user = to_numpy(pt, int(argv[1]))
    # prints the np.ndarrays for easy viewing
    # print(data)
    # print(user)
    # data_num and user_num are the numbers-only numpy.ndarrays
    # first headings row is removed and type changed to ints
    print("got numpy.ndarrays")
    data_num = data[1:].astype(int)
    user_num = user[1:].astype(int)
    indices, cos_sim = similar_ratings(data_num, user_num)
    print("got cosine similarities")
    user_predictions, predicted_indices = predict_ratings(
        user, data_num, user_num, indices, cos_sim)
    # prints the updated user for easy viewing
    # print(user_predictions)
    # prints the list of indices where book rating was predicted
    # print(predicted_indices)
    print("got predicted ratings")
    sorted_ISBNs = get_recommendations(user_predictions, predicted_indices)
    # prints the sorted ISBN recommendations for easy viewing
    print(sorted_ISBNs)
