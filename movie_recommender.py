#!/usr/bin/env python3
"""
Tests the Singular Value Decomposition (SVD) method
for recommender system for movies, querying from SQLAlchemy models
"""


from functions.setup_matrices import pivot_table
from functions.setup_matrices import to_numpy
from functions.similarity import similar_ratings
from functions.predictions import predict_ratings
from models import storage
from sys import argv


if __name__ == "__main__":
    if len(argv) < 2:
        raise TypeError(
            "Missing argument for specific user id to get recs for")
    # gets list of all MovieRatings
    # ratings_dict is dictionary of objects
    # ratings_list is list of dictionary representation
    ratings_dict, ratings_list = storage.all("MovieRatings")
    # creates pivot table from ratings_list
    #    with users as rows, titles as columns
    #    and ratings where user and title meet
    pt = pivot_table(ratings_list)
    # prints pivot table for easy viewing
    # for row in pt:
    # print(row)
    # turns pivot table into numpy.ndarrays
    data, user = to_numpy(pt, int(argv[1]))
    # prints the np.ndarrays for easy viewing
    # print(data)
    # print(user)
    # data_num and user_num are the numbers-only numpy.ndarrays
    # first headings row is removed and type changed to ints
    data_num = data[1:].astype(int)
    user_num = user[1:].astype(int)
    indices, cos_sim = similar_ratings(data_num, user_num)
    user_predictions, missing_ratings = predict_ratings(
        user, data_num, user_num, indices, cos_sim)
    # prints the updated user for easy viewing
    print(user_predictions)
    # prints the list of indices where book rating was predicted
    print(missing_ratings)
