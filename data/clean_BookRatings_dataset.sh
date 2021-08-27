#!/usr/bin/env bash
# cleans BookRatings dataset to only valid ISBN numbers
# for best results, replace all 0 ratings with non-digit character before running script

head -n 24 BX-Book-Ratings.sql > BookRatings.sql
grep -E ",'[[:digit:]]{9}X',[[:digit:]]*);" BX-Book-Ratings.sql >> BookRatings.sql
grep -E ",'[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings.sql >> BookRatings.sql
grep -E ",'978[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings.sql >> BookRatings.sql
grep -E ",'979[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings.sql >> BookRatings.sql
