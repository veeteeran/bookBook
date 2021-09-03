#!/usr/bin/env python3
"""
Tests the Singular Value Decomposition (SVD) method
for recommender system for movies, querying from SQLAlchemy models
"""


from models import storage
from sklearn.metrics.pairwise import cosine_similarity
from surprise import KNNWithMeans
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


def to_matrix(pivot_table):
    """
    Turns a list of dicts pivot table into a matrix
        representing user ratings of movies

    parameters:
        pivot_table [list of dicts]:
            represents the pivot table

    returns:
        [Pandas DataFrame]:
            DataFrame representation of the pivot table
    """
    # matrix will be list of lists
    matrix = []
    headings = []
    # adds the keys from dicts as headings for matrix
    for title in pivot_table[0].keys():
        headings.append(title)
    # adds headings as first row of matrix
    matrix.append(headings)
    # loops through each row of pivot table
    for row in pivot_table:
        new_row = []
        # adds values from row's dict to new row
        for value in row.values():
            new_row.append(value)
        # adds new row of values to matrix
        matrix.append(new_row)
    # transforms a list of lists (matrix) into numpy.ndarray
    array = np.array(matrix, ndmin=2)
    # turns numpy.ndarray into Pandas DataFrame
    data = pd.DataFrame(array[1:])
    # adds headers as column names to DataFrame
    data.columns = headings
    # returns Pandas DataFrame representation of ratings matrix
    return data


if __name__ == "__main__":
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
    # turns pivot table into Pandas DataFrame
    data = to_matrix(pt)
    # prints the DataFrame for easy viewing
    print(data)
    cos_sim = cosine_similarity(data)
    print(cos_sim)
