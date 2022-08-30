export const JOIN_QUERIES = [
  // prints names of all authors and their corresponding mentors.
  `SELECT authors.author_no ,authors.author_name, mentor.author_name AS mentor 
 FROM authors
 JOIN authors mentor 
 ON authors.mentor = mentor.author_no;`,

  // prints all columns of authors and their published paper_title
  `   SELECT authors.*,research_Papers.paper_title 
     FROM publish_reference
     JOIN authors 
     ON publish_reference.author_no = authors.author_no
     JOIN  research_Papers 
     ON  research_Papers.paper_id = publish_reference.paper_id;`,
];
