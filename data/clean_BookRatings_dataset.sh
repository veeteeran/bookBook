#!/usr/bin/env bash
# cleans BookRatings dataset to only valid ISBN numbers
# for best results, replace all 0 ratings with non-digit character before running script

FILE=BookRatings.sql
if [[ -f "$FILE" ]]; then
    rm BookRatings.sql
fi
head -n 24 BX-Book-Ratings-no0.sql > BookRatings.sql
grep -E ",'[[:digit:]]{9}X',[[:digit:]]*);" BX-Book-Ratings-no0.sql >> BookRatings.sql
grep -E ",'[[:digit:]]{9}x',[[:digit:]]*);" BX-Book-Ratings-no0.sql >> BookRatings.sql
grep -E ",'[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings-no0.sql >> BookRatings.sql
grep -E ",'978[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings-no0.sql >> BookRatings.sql
grep -E ",'979[[:digit:]]{10}',[[:digit:]]*);" BX-Book-Ratings-no0.sql >> BookRatings.sql
