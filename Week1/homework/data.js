export const tables = [
  `CREATE TABLE if not exists Invitee (
        invitee_no INT, 
        invitee_name VARCHAR(200),
        invited_by VARCHAR(200));`,

  `CREATE TABLE if not exists Room (
        room_no INT PRIMARY KEY  AUTO_INCREMENT, 
        room_name TEXT, 
        floor_number INT );`,

  `CREATE TABLE IF NOT EXISTS Meeting (
        meeting_no INT ,
        meeting_title TEXT,
        starting_time TIMESTAMP ,
        ending_time TIMESTAMP,
        room_no int,
        FOREIGN KEY(room_no) REFERENCES ROOM(room_no) 
        );`,
];

export const values = [
  ` INSERT INTO  Invitee (invitee_no ,invitee_name, invited_by)
       VALUES (0,'Fed', 'Arsalan'),
       (1,'Rob','Cynthia'),
       (2,'jim','Rob'),
       (3,'Wouter','cynthia'),
       (4,'Unmesh','Fed')`,

  ` INSERT INTO  Room (room_name, floor_number)
         VALUES ('The Dylan-21', 9),
         ('Continental Amstel-1',3),
         ('Sofitel Legend-8',4),
         ('Conservatorium-2',2),
         (' Pestana Riverside-4',6)`,

  `INSERT INTO Meeting(meeting_no, meeting_title, starting_time, ending_time )
     VALUES(1,'The Planning meeting', '2022-08-22 04:00:00', '2022-08-22 05:00:00'),
     (2,'The Technical meeting', '2022-08-29 12:00:00', '2022-08-29 03:30:00'),
     (3,'The Daily_standup meeting', '2022-08-22  09:00:00','2022-08-22  10:00:00'),
     (4,'The DEMO meeting', '2022-09-05 11:30:00','2022-09-05 01:00:00'),
     (5,'The Retrospective meeting', '2022-09-06 03:00:00','2022-09-06 05:00:00')`,
];

export const worldQuery = [
  `SELECT name FROM country WHERE population > 800000`,
  `SELECT name FROM country WHERE name LIKE '%land%'`,
  `SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000`,
  `SELECT name FROM country WHERE continent = 'Europe'`,
  `SELECT Name FROM country ORDER BY SurfaceArea DESC`,
  `SELECT population FROM city WHERE Name = 'Rotterdam'`,
  `SELECT * FROM country  ORDER BY surfaceArea LIMIT 10`,
  `SELECT * FROM city  ORDER BY population LIMIT 10`,
  `SELECT  SUM(population)FROM country`,
];
