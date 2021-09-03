#!/usr/bin/env python3
"""
Tests the Singular Value Decomposition (SVD) method
for recommender system for movies, querying from SQLAlchemy models
"""


from models import storage
from sklearn.metrics.pairwise import cosine_similarity
from surprise import KNNWithMeans
from sys import argv
import numpy as np
import pandas as pd


def pivot_table(ratings_list):
    """
    Creates a pivot table with users as rows and movies as columns

    parameters:
        ratings_list [list of dicts]:
            represents the table MovieRatings

    returns:
        pivot table
    """
    result = {}
    # ysort is list of all user IDs
    ysort = []
    # xsort is list of all movie Titles
    xsort = []
    # loop through every row in MovieRatings table representation
    for row in ratings_list:
        # yaxis is current row's user ID
        yaxis = row["ID"]
        # if user ID is not yet in ysort, it saves to ysort
        if yaxis not in ysort:
            ysort.append(yaxis)
        # xaxis is current row's movie Title
        xaxis = row["Title"]
        # if movie Title is not yet in xsort, it saves to xsort
        if xaxis not in xsort:
            xsort.append(xaxis)
        # tries user ID as key in results dictionary
        try:
            result[yaxis]
        except KeyError:
            # if user ID is not yet a key in results dictionary, creates one
            result[yaxis] = {}
        # tests if movie Title is in results dictionary under user ID key
        if xaxis not in result[yaxis]:
            # if not, 0 is added to create placeholder for user ID, movie Title
            result[yaxis][xaxis] = 0
        # saves Rating in results dictionary under user ID and movie Title
        result[yaxis][xaxis] = row["Rating"]
    # loops through all user IDs
    for yaxis in ysort:
        # loops through all movie Titles
        for xaxis in xsort:
            # if movie Title does not already exist within user ID,
            #     saves as 0 rating
            if xaxis not in result[yaxis]:
                result[yaxis][xaxis] = 0

    # creates list headings with ID first
    headings = ["ID"]
    # extends headings list with all movie Titles
    headings.extend(xsort)

    # creates pivot table as list of dictionaries
    pivot_table = []
    # loops through all user IDs
    for user_id in ysort:
        # creates row based on user ID value
        row = [user_id]
        # extends row with user ratings for each movie Title
        row.extend([result[user_id][x] for x in xsort])
        # appends dictionary with keys from headings and
        #    values from row to pivot_table
        pivot_table.append(dict(zip(headings, row)))
    # returns newly created pivot table
    return pivot_table


def to_matrices(pivot_table, user_id):
    """
    Turns a list of dicts pivot table into a matrix
        representing user ratings of movies

    parameters:
        pivot_table [list of dicts]:
            represents the pivot table
        user_id [int]:
            value of user id finding recommendations for

    returns:
        data [Pandas DataFrame]:
            DataFrame representation of the pivot table,
                excluding user finding recommendation for
        user [Pandas DataFrame]:
            DataFrame representation of the pivot table,
                specifically for user's ratings
    """
    # matrix will be list of lists of all user ratings
    #     excluding the user finding recommendation for
    matrix = []
    # user_row will be list of specific user's rating
    user_row = []
    headings = ["ID"]
    # adds the keys from dicts as headings for matrix
    for title in pivot_table[0].keys():
        if title != "ID":
            headings.append(title)
    # adds headings as first row of matrix and user
    matrix.append(headings)
    user_row.append(headings)
    # loops through each row of pivot table
    for row in pivot_table:
        new_row = []
        # adds values from row's dict to new row
        for value in headings:
            new_row.append(row[value])
        # adds new row of values to matrix
        if row["ID"] == user_id:
            user_row.append(new_row)
        else:
            matrix.append(new_row)
    # transforms a list of lists matrices into numpy.ndarray
    data_array = np.array(matrix, ndmin=2)
    user_array = np.array(user_row, ndmin=2)
    # turns numpy.ndarray into Pandas DataFrames
    data = pd.DataFrame(data_array[1:])
    user = pd.DataFrame(user_array[1:])
    # adds headers as column names to DataFrame
    data.columns = headings
    user.columns = headings
    # returns Pandas DataFrame representation of ratings matrix
    return data_array, user_array


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
    data, user = to_matrices(pt, int(argv[1]))
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
