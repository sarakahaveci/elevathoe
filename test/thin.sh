
rm -rf output.json output.pdf

# get customer list
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getCustomers' '{}'

# get user list
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getUsers' '{}'

# add user
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'addUser' '{"email": "osmanhakyemez@gmail.com", "fullname": "Osman Hakyemez", "password": "11223344"}'

# get project details
#python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getProjectDetails' '{"entryId": "a74bb3ef-1830-41bf-b71a-9fc44e57587c"}'

./show.sh
