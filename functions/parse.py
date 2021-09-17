#!/usr/bin/env python3
"""
Defines function to determine top recommendations from newly predicted ratings
"""


def get_recommendations(user_predictions, predicted_indices, N=10):
    """
    Determines the top N recommendations for the user based on
        newly predicted ratings

    parameters:
        user_predictions [np.ndarray]:
            updated users array with predicited ratings based on
                weighted average from most similiar users' ratings
        predicted_indices [list]:
            list of index values where book ratings were predicted
        N [int]:
            maximum number of recommendations to return

    returns:
        sorted_ISBNs [list]:
            sorted list of top recommended book ISBNs
    """
    # predicted ratings will store list of dicts of all predicted ratings
    predicted_ratings = []
    # loop through each predicted index
    for index in predicted_indices:
        rating = user_predictions[1][index]
        if rating == "0":
            # if rating is 0, ignore and continue on
            continue
        if rating != "10":
            # if rating is less than 10, prepend a 0 for sorting
            rating = "0" + rating
        # dictionary stores both ISBN and Rating associated with index
        dictionary = {"ISBN": user_predictions[0][index],
                      "Rating": rating}
        # append dictionary to predicted_ratings list
        predicted_ratings.append(dictionary)
    # sorts predicted_ratings by Rating value
    sorted_predicted_ratings = sorted(predicted_ratings,
                                      key=lambda i: i["Rating"],
                                      reverse=True)
    # if there are more than N recommendations, predicted_ratings is sliced
    #     to cap maximum number of recommendations
    if len(predicted_ratings) > N:
        sorted_predicted_ratings = sorted_predicted_ratings[:N]
    # prints sorted predicted ratings for easy viewing
    for prediction in sorted_predicted_ratings:
        print(prediction)
    # print(sorted_predicted_ratings)
    # sorted_ISBNs will be sorted list of only book ISBNs
    sorted_ISBNs = []
    # loop through sorted predicted ratings to get ISBN value
    for prediction in sorted_predicted_ratings:
        # append recommended ISBN from prediction's dicitonary
        sorted_ISBNs.append(prediction["ISBN"])
    # return list of top recommended ISBNs
    return sorted_ISBNs
