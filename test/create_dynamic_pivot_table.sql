-- This script attempts to create a dynamic pivot table in bookBook_main_db
-- pivots book to rows and users to columns with ratings at intersection

SET group_concat_max_len = 9999999999999;
DROP TABLE IF EXISTS `Pivot`;
SET @columns = NULL;
SELECT
	GROUP_CONCAT(DISTINCT
		CONCAT(
			'sum(CASE WHEN ID = ''',
			ID,
			''' THEN Rating END) AS ''',
			ID,
			''''
		)
	) INTO @columns
FROM MovieRatings;
SET @columns = CONCAT('CREATE TABLE Pivot SELECT Title, ', @columns, ' FROM MovieRatings GROUP BY Title');
SELECT @columns;
PREPARE stmt FROM @columns;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
