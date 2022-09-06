#Answers

1: Member_Address , dinner_id , dinner_date , venue_code, food_code is violating 1NF because each column should contain single value and one type of data e.g food_code contains multiple values and member_Address and dinner_id contain different data type INT and text both in one column .further more dinner_date the formate of date is not consistent.

2: I would extract the dinner_id because we also have member -id so if this is the only table in manger's Dinner club database then dinner_id is useless until and unless its not connecting two tables as a primary or foreign key

3: To follow the 3NF compliant solution tables e.g

1.  | member_id| member_name| member_address|
    | 1 | Amit | 325 Max park |
    | 2 | Hema | 516 6th Ave |
    | 3 | Ben | 9 Peter St |

2.  | dinner_id| dinner_date|
    | 101 | 2022-10-15|
    | 102 | 2022-09-09|
    | 103 | 2022-11-20|

3.  | venue_id| venue_description |
    | 1 | Grand Ball Room |
    | 2 | Mama's Kitchen |
    | 3 | Zoku Roof Top |

4.  | food_id| food_description |
    | 1 | chocolate lava cake |
    | 2 | chicken Curry with herbs|
    | 3 | mutton curry with rice |
