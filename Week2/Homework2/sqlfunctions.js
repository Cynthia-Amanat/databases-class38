export const AGGREGATE_QUERIES = [
  // All research papers and the number of authors that wrote that paper.
  `SELECT 
research_Papers.paper_id, research_Papers.paper_title, 
COUNT(publish_reference.author_no) as authorsCount 
FROM research_Papers 
LEFT JOIN publish_reference 
ON publish_reference.paper_id = research_Papers.paper_id
group BY research_Papers.paper_id;`,

  // Sum of the research papers published by all female authors.

  `SELECT 
  COUNT(*) AS publishByFemales
  FROM  publish_reference  
  JOIN authors 
  ON authors.gender = "F" AND authors.author_no = publish_reference.author_no;
`,
  // Average of the h-index of all authors per university.

  `SELECT university, 
AVG(h_index) AS Average_h_index
FROM authors 
GROUP BY university;`,

  // Sum of the research papers of the authors per university.
  `SELECT
authors.university, 
COUNT(publish_reference.author_no) AS Research_paper_per_University
FROM publish_reference 
LEFT JOIN authors 
ON authors.author_no = publish_reference.author_no
GROUP BY university
ORDER BY Research_paper_per_University;
`,
  // Minimum and maximum of the h-index of all authors per university.
  `SELECT university,
MIN(h_index) AS Minimum_index, 
MAX(h_index) AS Maximum_index
FROM authors
GROUP BY  university; `,
];
