-- MySQL dump 9.11
--
-- Host: localhost    Database: Book-Crossing
-- ------------------------------------------------------
-- Server version	4.0.20a-debug

--
-- Table structure for table `Books`
--

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `ISBN` varchar(13) binary NOT NULL default '',
  `Title` varchar(255) default NULL,
  `Author` varchar(255) default NULL,
  `PublicationYear` int(10) unsigned default NULL,
  `Publisher` varchar(255) default NULL,
  `ImageSmall` varchar(255) binary default NULL,
  `ImageMedium` varchar(255) binary default NULL,
  `ImageLarge` varchar(255) binary default NULL,
  PRIMARY KEY  (`ISBN`)
) ENGINE=INNODB;

INSERT INTO `books` VALUES ('055321215X','Pride and Prejudice','Jane Austen',1983,'Bantam','http://images.amazon.com/images/P/055321215X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/055321215X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/055321215X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('006015781X','Why Do Clocks Run Clockwise? and Other Imponderables: Mysteries of Everyday Life Explained','David Feldman',1987,'Harpercollins','http://images.amazon.com/images/P/006015781X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/006015781X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/006015781X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('068983571X','Hound of the Baskervilles (Aladdin Classics)','Sir Arthur Conan Doyle',2000,'Aladdin','http://images.amazon.com/images/P/068983571X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/068983571X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/068983571X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('034545829X','Waking Up Screaming: Haunting Tales of Terror','H. P. Lovecraft',2003,'Del Rey Books','http://images.amazon.com/images/P/034545829X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/034545829X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/034545829X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('067084487X','The Stinky Cheeseman and Other Fairly Stupid Tales (Caldecott Honor Book)','Jon Scieszka',1993,'Viking Books','http://images.amazon.com/images/P/067084487X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/067084487X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/067084487X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('067170463X','Murder on the Orient Express','Agatha Christie',1978,'Pocket Books','http://images.amazon.com/images/P/067170463X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/067170463X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/067170463X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('156619301X','Dracula','Bram Stoker',1994,'Dorset Press','http://images.amazon.com/images/P/156619301X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/156619301X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/156619301X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('059045367X','Monster Blood (Goosebumps, No 3)','R. L. Stine',1995,'Scholastic','http://images.amazon.com/images/P/059045367X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/059045367X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/059045367X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('037541309X','Balzac and the Little Chinese Seamstress','Dai Sijie',2001,'Alfred A. Knopf','http://images.amazon.com/images/P/037541309X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/037541309X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/037541309X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('185326041X','The Great Gatsby','F. Scott Fitzgerald',1999,'Lb May & Assoc Inc','http://images.amazon.com/images/P/185326041X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/185326041X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/185326041X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('156389470X','Stardust','Neil Gaiman',1999,'DC Comics','http://images.amazon.com/images/P/156389470X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/156389470X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/156389470X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('185854176X','Little Women','Louisa M. Atcott',1995,'Brimax Books Ltd','http://images.amazon.com/images/P/185854176X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/185854176X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/185854176X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('059030271X','Charlotte''s Web','E. B. White',1974,'Scholastic Paperbacks (T)','http://images.amazon.com/images/P/059030271X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/059030271X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/059030271X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('059043344X','Ten Great Mysteries by Edgar Allan Poe','Edgar Allan Poe',1989,'Scholastic','http://images.amazon.com/images/P/059043344X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/059043344X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/059043344X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('014038572X','The Outsiders','S. E. Hinton',1997,'Puffin Books','http://images.amazon.com/images/P/014038572X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/014038572X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/014038572X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('055321277X','Dr. Jekyll and Mr. Hyde','ROBERT LOUIS STEVENSON',1982,'Bantam','http://images.amazon.com/images/P/055321277X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/055321277X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/055321277X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('014034991X','Westing Game','Ellen Raskin',1992,'Puffin Books','http://images.amazon.com/images/P/014034991X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/014034991X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/014034991X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('069401110X','The Secret Garden','Frances Hodgson Burnett',1998,'HarperFestival','http://images.amazon.com/images/P/069401110X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/069401110X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/069401110X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('014012389X','Love in the Time of Cholera','Gabriel Garcia Marquez',1998,'Penguin Books Ltd','http://images.amazon.com/images/P/014012389X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/014012389X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/014012389X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('042513024X','The A.B.C. Murders','Agatha Christie',1993,'Berkley Publishing Group','http://images.amazon.com/images/P/042513024X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/042513024X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/042513024X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('043912042X','Esperanza Rising','Pam Munoz Ryan',2002,'Scholastic Paperbacks','http://images.amazon.com/images/P/043912042X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/043912042X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/043912042X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('014034294X','Matilda','Roald Dahl',1990,'Puffin Books','http://images.amazon.com/images/P/014034294X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/014034294X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/014034294X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('055321019X','Emma','Jane Austen',1981,'Bantam Books','http://images.amazon.com/images/P/055321019X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/055321019X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/055321019X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('037582233X','Stargirl','JERRY SPINELLI',2002,'Knopf Books for Young Readers','http://images.amazon.com/images/P/037582233X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/037582233X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/037582233X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('068483068X','Gone With the Wind','Margaret Mitchell',1936,'Scribner','http://images.amazon.com/images/P/068483068X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/068483068X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/068483068X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('067972768X','The Joy Luck Club','Amy Tan',1991,'Vintage Books USA','http://images.amazon.com/images/P/067972768X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/067972768X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/067972768X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('044040665X','Beezus and Ramona','Beverly Cleary',1994,'Yearling Books','http://images.amazon.com/images/P/044040665X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/044040665X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/044040665X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('067163822X','The Secret of the Old Lace Nancy Drew','Carolyn Keene',1987,'Aladdin','http://images.amazon.com/images/P/067163822X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/067163822X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/067163822X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('059043389X','Adventures of Huckleberry Finn','Mark Twain',1987,'Scholastic','http://images.amazon.com/images/P/059043389X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/059043389X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/059043389X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('156619024X','Jane Eyre','Charlotte Bronte',0,'Barnes Noble Classics','http://images.amazon.com/images/P/156619024X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/156619024X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/156619024X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('044046126X','Nate The Great','Marjorie Weinman Sharmat',1977,'Yearling Books','http://images.amazon.com/images/P/044046126X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/044046126X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/044046126X.01.LZZZZZZZ.jpg');
INSERT INTO `books` VALUES ('014034019X','The BFG','Roald Dahl',1985,'Puffin Books','http://images.amazon.com/images/P/014034019X.01.THUMBZZZ.jpg','http://images.amazon.com/images/P/014034019X.01.MZZZZZZZ.jpg','http://images.amazon.com/images/P/014034019X.01.LZZZZZZZ.jpg');
