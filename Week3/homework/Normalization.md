#Answers

1: Member_Address , dinner_id , dinner_date , venue_code, food_code is violating 1NF because each column should contain single value and one type of data e.g food_code contains multiple values and member_Address and dinner_id contain different data type INT and text both in one column .further more dinner_date the formate of date is not consistent.

member_address can be a TEXT type which may contain street numbers so it does not technically violate 1NF
yes but i was not sure which kind of datatype is used here or i can divide member_address into street_name and PostCode

2: I would extract the dinner, members, venue, food entities

3: To follow the 3NF compliant solution tables e.g

1.  | member_id(PK)| member_name| member_address|

2.  | venue_id(PK)| venue_description |member_id(FK)

3.  | food_id(PK)| food_description |dinner_id(FK)

4.  | dinner_id(PK)| dinner_date| venue_id(FK)|
