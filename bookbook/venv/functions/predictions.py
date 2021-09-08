#!/usr/bin/env python3
"""
Defines function to predict missing ratings from most similiar users' ratings
"""


def predict_ratings(user, data_num, user_num, indices, cos_sim):
    """
    Predicts missing ratings in specific user using weighted average of
        most similar users' ratings

    parameters:
        user [np.ndarray]:
            representation of specific user ratings, with headings
        data_num [np.ndarray]:
            the numbers-only representation of all user ratings,
                except specific user
        user_num [np.ndarray]:
            the numbers-only representation of specific user ratings
        indices [list]:
            list of index values where most similar users can be found
        cos_sim [list]:
            all cosine similarities between specific user and all other users

    returns:
        users [np.ndarray]:
            updated users array with predicited ratings based on
                weighted average from most similiar users' ratings
        missing_ratings [list]:
            list of index values where book ratings were predicted
    """
    # missing ratings is list of all indices where book rating is predicted
    missing_ratings = []
    # loops through all ratings in user_num
    for book_index, rating in enumerate(user_num[0]):
        # calulates predicition if the rating is missing
        if rating == 0:
            # adds current index value to missing_ratings list
            missing_ratings.append(book_index)
            # numerator is sum of (other user ratings * similiary factor)
            sum_numerator = 0
            # denominator is sum of similarity factors used
            sum_denominator = 0
            # loop through most similiar user indices
            for sim_index in indices:
                # other users' rating comes from data_num,
                #    at most similar user's index,
                #    for the book currently missing rating for
                other_user_rating = data_num[sim_index][book_index]
                # if other user's rating is 0, this is a placeholder,
                #    not an actual rating, so it is skipped
                if other_user_rating is 0:
                    continue
                # similarity factor comes from cosine similarity,
                #    at most similar user's index
                similarity_factor = cos_sim[sim_index]
                # add product of other rating & similarity factor to numerator
                sum_numerator += (other_user_rating * similarity_factor)
                # add similarity factor to denominator
                sum_denominator += similarity_factor
            # calculates the weighted average to generate predicted rating
            weighted_avg = sum_numerator / sum_denominator
            # print weighted average for easy viewing
            # print("weighted_avg: ", weighted_avg)
            # update specific user's rating of book at book_index with
            #    weighted average, rounded to nearest digit
            user[1][book_index] = "{}".format(round(weighted_avg))
    # returns user with new predicted ratings
    return user, missing_ratings
