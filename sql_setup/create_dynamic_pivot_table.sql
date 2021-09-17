-- This script attempts to create a dynamic pivot table in bookBook_main_db
-- pivots book to rows and users to columns with ratings at intersection

SET group_concat_max_len = 9999999999999;
SET @columns = NULL;
SELECT
	GROUP_CONCAT(DISTINCT
		CONCAT(
			'sum(IF(ID=''',
			ID,
			''', Rating, 0) AS ''',
			ID,
			''''
		)
	) INTO @columns
FROM BookRatings
WHERE ISBN < 55000000 && (ID % 2) = 0;
SET @columns = CONCAT('SELECT ISBN, ', @columns, ' FROM BookRatings GROUP BY ISBN');
SELECT @columns;
PREPARE stmt FROM @columns;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
