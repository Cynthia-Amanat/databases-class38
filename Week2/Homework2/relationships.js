const CREATE_RESEARCH_PAPERS = `CREATE TABLE research_Papers(
    paper_id INT PRIMARY KEY,
    paper_title VARCHAR(200),
    conference VARCHAR(200),
    publish_date DATE
 )`;

const CREATE_PUBLISH_REFERENCE = `CREATE TABLE publish_reference (
    publish_reference_no INT PRIMARY KEY,
    paper_id INT,
    author_no INT,
    FOREIGN KEY (author_no) REFERENCES authors(author_no),
    FOREIGN KEY (paper_id ) REFERENCES research_Papers(paper_id)
 )`;

const INSERT_INTO_AUTHORS = `INSERT INTO authors(author_no,author_name,university, date_of_birth, h_index,gender,mentor) 
 VALUES
 (1, "William Shakespeare", "University of Cambridge", "1616-4-23",1000,"M" , null),
 (2, "Agatha Christie", "University of Cambridge", "1963-5-22",1001,"F",2),
 (3, "Barbara Cartland", "University of Colombia", "1953-2-21",1002,"M",4),
 (4, "Georges Simenon", "University of Cambridge", "1945-4-20",1003,"M",5),
 (5, "Dr. Seuss", "University of Japan", "1934-7-19",1004,"M",null),
 (6, "Leo Tolstoy", "University of Cambridge", "1940-4-06",1005,"M",3),
 (7, "Danielle Steel", "University of Germany", "1967-6-11",1006,"M",2),
 (8,"Corín Tellado", "University of America", "1973-4-20",1007,"F",null),
 (9, "Enid Blyton", "University of Cambridge", "1962-2-18",1008,"F",1),
 (10, "Edgar Wallace", "Oxford University" , "1945-12-04",1009,"M",4),
 (11, "Janet Dailey", "University of America", "1965-11-07",1010,"F",null),
 (12, "James Patterson", "University of Amsterdam", "1919-1-02",1011,"M",3),
 (13, "Erle Stanley Gardner", "University of France", "1920-7-21",1012,"F",2),
 (14, "Alexander Pushkin", "University of America", "1950-6-30",1013,"M",1),
 (15, "Jin Yong", "University of china", "1952-8-14",1014,"M",2)
  `;

const INSERT_INTO_RESEARCH_PAPERS = `INSERT INTO research_Papers( paper_id ,paper_title,conference,  publish_date)
   VALUES 
   (1,"Research paper Human", "conference 2", "2020-02-25" ),
   (2,"Research paper Society ", "conference 3", "2021-04-15 "),
   (3,"Research paper Social media", "conference 4", "2019-05-15" ),
   (4,"Research paper environment", "conference 5", "2020-02-05" ),
   (5,"Research paper people", "conference 5", "2022-03-21 "),
   (6,"Research paper identity ", "conference 7", "2000-09-25" ),
   (7,"Research paper behavior ", "conference 8", "2003-10-09" ),
   (8,"Research paper Agencies", "conference 9", "2008-02-14" ),
   (9,"Research paper Age factors", "conference 10", "2006-09-25 "),
   (10,"Research paper media", "conference 11", "1999-03-03" ),
   (11,"Research paper powers", "conference 12", "1993-06-06" ),
   (12,"Research paper brands", "conference 13", "2002-02-05" ),
   (13,"Research paper events", "conference 14", "2004-06-25 "),
   (14,"Research paper governments", "conference 15", "2009-08-09" ),
   (15,"Research paper political", "conference 16", "2005-02-10 "),
   (16,"Research paper matters", "conference 17", "2012-07-22"),
   (17,"Research paper wordAdvice", "conference 18", "2016-09-30" ),
   (18,"Research paper journal article", "conference 19", "2018-12-06"),
   (19,"Research paper Artificial", "conference 20", "2011-11-25" ),
   (20,"Research paper nature", "conference 21", "2012-04-20" ),
   (21,"Research paper science", "conference 22", "2021-07-25" ),
   (22,"Research paper world policy", "conference 23", "2020-08-23" ),
   (23,"Research paper Ethics", "conference 24", "2022-06-25" ),
   (24,"Research paper multi authors", "conference 25", "2001-02-21" ),
   (25,"Research paper third world countries", "conference 26", "2017-02-01" ),
   (26,"Research paper Amazon", "conference 27", "2019-02-27 "),
   (27,"Research paper Ali express", "conference 28", "2020-07-25" ),
   (28,"Research paper life under water", "conference 29", "2021-05-21" ),
   (29,"Research paper information teleology", "conference 30", "2022-04-25" ),
   (30,"Research paper medical and health", "conference 1", "2021-03-20 ")

   `;

const INSERT_INTO_PUBLISH_REFERENCE = `INSERT INTO publish_reference(publish_reference_no,paper_id , author_no )
   VALUES 
   (101, 5, 1),
   (102, 4 , 2),
   (103, 3 , 3),
   (104, 2 , 4),
   (105, 1 , 5),
   (106, 6 , 6),
   (107, 7 , 7),
   (108, 8, 8),
   (109, 9 , 9),
   (110, 10 , 10),
   (112, 20, 11),
   (113, 19,  12),
   (114, 17, 14),
   (116, 16, 15),
   (117, 15, 1),
   (118, 14, 2),
   (119, 13, 3),
   (120, 12, 4),
   (121, 11, 5),
   (122, 30, 6),
   (123, 29 , 7),
   (124, 28, 8),
   (125, 27, 9),
   (126, 26, 10),
   (127, 25 , 11),
   (128, 24 , 12),
   (129, 23, 13),
   (130, 22, 14)`;

export const CREATE_RELATE = [
  CREATE_RESEARCH_PAPERS,
  CREATE_PUBLISH_REFERENCE,
  INSERT_INTO_AUTHORS,
  INSERT_INTO_RESEARCH_PAPERS,
  INSERT_INTO_PUBLISH_REFERENCE,
];
