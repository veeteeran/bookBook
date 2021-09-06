#!/usr/bin/env python3
"""
Defines functions to create initial pivot table and
transform that pivot table into Numpy ndarrays and Pandas DataFrame
"""


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
            # if not, add 0 to create placeholder under user ID, movie Title
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
    Turns a list of dicts pivot table into matrices
        representing specific user ratings of movies
        and all other user ratings of movies

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
    # headings is all column names
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
            # if "ID" matches specific user's ID, save to user_row
            user_row.append(new_row)
        else:
            # otherwise, save all other users to matrix
            matrix.append(new_row)
    return matrix, user_row, headings


def to_numpy(pivot_table, user_id):
    """
    Turns a list of dicts pivot table into numpy.ndarrays
        representing specific user ratings of movies
        and all other user ratings of movies

    parameters:
        pivot_table [list of dicts]:
            represents the pivot table
        user_id [int]:
            value of user id finding recommendations for

    returns:
        data [numpy.ndarray]:
            numpy array representation of the pivot table,
                excluding user finding recommendation for
        user [numpy.ndarray]:
            numpy array representation of the pivot table,
                specifically for user's ratings
    """
    # uses to_matrices function to get initial matrix representations
    matrix, user_row, headings = to_matrices(pivot_table, user_id)
    # transforms a list of lists matrices into numpy.ndarray
    data = np.array(matrix, ndmin=2)
    user = np.array(user_row, ndmin=2)
    return data, user


def to_pandas(pivot_table, user_id):
    """
    Turns a list of dicts pivot table into Pandas DataFrames
        representing specific user ratings of movies
        and all other user ratings of movies

    parameters:
        pivot_table [list of dicts]:
            represents the pivot table
        user_id [int]:
            value of user id finding recommendations for

    returns:
        data [pd.DataFrame]:
            Pandas DataFrame representation of the pivot table,
                excluding user finding recommendation for
        user [pd.DataFrame]:
            Pandas DataFrame representation of the pivot table,
                specifically for user's ratings
    """
    # uses to_matrices function to get initial matrix representations
    matrix, user_row, headings = to_matrices(pivot_table, user_id)
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
    return data, user
