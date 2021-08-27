-- This script sets up the database and user for bookBook's main database
-- User is identified by password and has privileges

CREATE DATABASE IF NOT EXISTS test_db;
DROP USER IF EXISTS 'bookTest'@'localhost';
CREATE USER IF NOT EXISTS 'bookTest'@'localhost' IDENTIFIED BY 'bookWorm';
GRANT ALL PRIVILEGES ON test_db.* TO 'bookTest'@'localhost';
GRANT SELECT ON performance_schema.* TO 'bookTest'@'localhost';
FLUSH PRIVILEGES;
