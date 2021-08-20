-- This script attempts to create a pivot table in bookBook_main_db
-- pivots book to rows and users to columns with ratings at intersection

SELECT ISBN,
       sum(IF(ID=278854, Rating, 0)) AS '278854',
       sum(IF(ID=1, Rating, 0)) AS '1',
       sum(IF(ID=2, Rating, 0)) AS '2',
       sum(IF(ID=3, Rating, 0)) AS '3',
       sum(IF(ID=4, Rating, 0)) AS '4',
       sum(IF(ID=5, Rating, 0)) AS '5',
       sum(IF(ID=6, Rating, 0)) AS '6',
       sum(IF(ID=7, Rating, 0)) AS '7',
       sum(IF(ID=8, Rating, 0)) AS '8',
       sum(IF(ID=9, Rating, 0)) AS '9',
       sum(IF(ID=10, Rating, 0)) AS '10'
FROM BookRatings
WHERE ISBN < 555000000
GROUP BY ISBN;
