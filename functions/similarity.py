#!/usr/bin/env python3
"""
Defines function to find N most similar users and their cosine similiarity
"""


from sklearn.metrics.pairwise import cosine_similarity


def similar_ratings(data_num, user_num, N=1):
    """
    Determines the N most similar users to the user
        trying to get recommendations for

    parameters:
        data_num [np.ndarray]:
            the numbers-only representation of all user ratings,
                except specific user
        user_num [np.ndarray]:
            the numbers-only representation of specific user ratings
        N [int]:
            the number of users to find similar to specific user

    returns:
        indices [list]:
            list of index values where most similar users can be found
        cos_sim [list]:
            all cosine similarities between specific user and all other users
    """
    # uses scikit-learn to get cosine similarity between specific user and
    #    all other users
    cos_sim = cosine_similarity(user_num, data_num)[0]
    # print all cosine similiarites for easy viewing
    # print(cos_sim)
    # sorts the similarities by most similar first
    sorted_cos_sim = sorted(cos_sim, reverse=True)
    # determines the top N most similar through slicing
    most_similar = sorted_cos_sim[:N]
    # print the N most similar similiarites for easy viewing
    # print(most_similar)
    # start list to save indices where most similar users can be found
    indices = []
    # loop through all cosine similarities
    for index, similarity in enumerate(cos_sim):
        # if the similarity is in the top N similarities, save index value
        if similarity in most_similar:
            indices.append(index)
    # prints IDs of most similar users for easy reference
    for i, index in enumerate(indices):
        if i != (len(indices) - 1):
            print(data_num[index][0], end=", ")
        else:
            print(data_num[index][0])
    # return both indices of where to find most similar users and
    #    all cosine similiarity values
    return indices, cos_sim
