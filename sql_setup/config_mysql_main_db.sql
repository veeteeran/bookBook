-- This script sets up the database and user for bookBook's main database
-- User is identified by password and has privileges

CREATE DATABASE IF NOT EXISTS bookBook_main_db;
DROP USER IF EXISTS 'bookBook'@'localhost';
CREATE USER IF NOT EXISTS 'bookBook'@'localhost' IDENTIFIED BY 'bookWorm';
GRANT ALL PRIVILEGES ON bookBook_main_db.* TO 'bookBook'@'localhost';
GRANT SELECT ON performance_schema.* TO 'bookBook'@'localhost';
FLUSH PRIVILEGES;
