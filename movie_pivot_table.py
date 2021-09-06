#!/usr/bin/env python3
"""
Tests the Singular Value Decomposition (SVD) method
for recommender system for movies, querying from SQLAlchemy models
"""


from functions.setup_matrices import pivot_table
from functions.setup_matrices import to_numpy
from models import storage
from sklearn.metrics.pairwise import cosine_similarity
from surprise import KNNWithMeans
from sys import argv
import numpy as np
import pandas as pd


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
    # turns pivot table into Pandas DataFrames
    data, user = to_numpy(pt, int(argv[1]))
    data_num = data[1:].astype(int)
    user_num = user[1:].astype(int)
    # prints the DataFrames for easy viewing
    print(data)
    print(user)
    cos_sim = cosine_similarity(user_num, data_num)[0]
    print(cos_sim)
    N = 1
    sorted_cos_sim = sorted(cos_sim, reverse=True)
    print(sorted_cos_sim)
    print(cos_sim)
    most_similar = sorted_cos_sim[:N]
    print(most_similar)
    indices = []
    for index, similarity in enumerate(cos_sim):
        if similarity in most_similar:
            print("similarity: ", similarity, " & index: ", index)
            indices.append(index)
    print("------------------------")
    for book_index, rating in enumerate(user_num[0]):
        print(book_index, rating)
        if rating == 0:
            print("got here")
            sum_numerator = 0
            sum_divisor = 0
            for sim_index in indices:
                print(data_num[sim_index][book_index], " * ", cos_sim[sim_index])
                sum_numerator += (data_num[sim_index][book_index] * cos_sim[sim_index])
                sum_divisor += cos_sim[sim_index]
            weighted_avg = sum_numerator / sum_divisor
            print("weighted_avg: ", weighted_avg)
            user[1][book_index] = "{}".format(round(weighted_avg))
    print("------------------------")
    print(user)
