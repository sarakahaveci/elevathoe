
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
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getVisitPlan' '{"startTime": "2024-04-27T20:55:59.996Z", "endTime": "2024-05-03T20:55:59.996Z"}'

# add visit plan
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'addVisitPlan' '{"projectId": "a74bb3ef-1830-41bf-b71a-9fc44e57587c", "update": 0, "dueDate": "2024-04-29T20:55:59.996Z", "endDate": "2024-04-29T21:55:59.996Z" }'
#
# add visit maintainer
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'addVisitMaintainer' '{"maintainerId": "4c6a1881-5a45-4fe5-8c3a-fbac8b7c787a", "visitId": "04cea06b-5c6c-46e0-91cc-5cfe80e73cf0", "update": 0}'
#
# get customer projects
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getCustomerProjects' '{"customerId": "32c9c4f2-4a26-4c72-a8ee-db2b3a0e4e79", "start": 0, "finish": 10, "text": ""}'

./show.sh
