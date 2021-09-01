-- MySQL dump 9.11

DROP TABLE IF EXISTS `MovieRatings`;


CREATE TABLE `MovieRatings` (
  `ID` int(11) NOT NULL default '0',
  `Title` varchar(13) NOT NULL default '',
  `Rating` int(11) NOT NULL default '0',
  PRIMARY KEY  (`ID`,`Title`)
) ENGINE=INNODB;

--
-- Dumping data for table `MovieRatings`
--

INSERT INTO `MovieRatings` VALUES (1,'Interstellar',5);
INSERT INTO `MovieRatings` VALUES (2,'Interstellar',1);
INSERT INTO `MovieRatings` VALUES (3,'Interstellar',5);
INSERT INTO `MovieRatings` VALUES (4,'Interstellar',1);
INSERT INTO `MovieRatings` VALUES (1,'Star Wars',2);
INSERT INTO `MovieRatings` VALUES (2,'Star Wars',5);
INSERT INTO `MovieRatings` VALUES (3,'Star Wars',3);
INSERT INTO `MovieRatings` VALUES (4,'Star Wars',5);
INSERT INTO `MovieRatings` VALUES (1,'The Shining',1);
INSERT INTO `MovieRatings` VALUES (3,'The Shining',1);
INSERT INTO `MovieRatings` VALUES (4,'The Shining',5);
INSERT INTO `MovieRatings` VALUES (2,'Alien',1);
INSERT INTO `MovieRatings` VALUES (3,'Alien',5);
INSERT INTO `MovieRatings` VALUES (4,'Alien',1);
