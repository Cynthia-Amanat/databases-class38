#Answers

1: Member_Address , dinner_id , dinner_date , venue_code, food_code is violating 1NF because each column should contain single value and one type of data e.g food_code contains multiple values and member_Address and dinner_id contain different data type INT and text both in one column .further more dinner_date the formate of date is not consistent.

member_address can be a TEXT type which may contain street numbers so it does not technically violate 1NF
yes but i was not sure which kind of datatype is used here or i can divide member_address into street_name and PostCode

2: I would extract the dinner, members, venue, food entities

3: To follow the 3NF compliant solution tables e.g

1.  | member_id| member_name| member_address|
    | 1 | Amit | 325 Max park |
    | 2 | Hema | 516 6th Ave |
    | 3 | Ben | 9 Peter St |

2.  | venue_code| venue_description |
    | 111 | Grand Ball Room |
    | 112 | Mama's Kitchen |
    | 113 | Zoku Roof Top |

3.  | food_code| food_description |
    | C2 | chocolate lava cake |
    | C1 | chicken Curry with herbs|
    | M1 | mutton curry with rice |

4.  | dinner_id| dinner_date| member_id|venue_code | food_code|
    | 101 | 2022-10-15 | 1 | 111 | C2 |
    | 102 | 2022-09-09 | 2 | 112 | C1 |
    | 103 | 2022-11-20 | 3 | 113 | M1 |
