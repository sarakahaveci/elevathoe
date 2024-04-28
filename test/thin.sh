
rm -rf output.json output.pdf

# get customer list
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getCustomers' '{}'

# get customer list (by search)
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getCustomers' '{"text": "Duman"}'

# get user list
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getUsers' '{}'

# add user
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'addUser' '{"email": "osmanhakyemez@gmail.com", "fullname": "Osman Hakyemez", "password": "11223344"}'

# get project details
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getProjectDetails' '{"entryId": "a74bb3ef-1830-41bf-b71a-9fc44e57587c"}'

# get visit plan
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getVisitPlan' '{"startTime": "2024-04-27T20:55:59.996Z", "endTime": "2024-04-29T20:55:59.996Z"}'

# add visit plan
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'addVisitPlan' '{"projectId": "a74bb3ef-1830-41bf-b71a-9fc44e57587c", "update": 0}'

./show.sh
