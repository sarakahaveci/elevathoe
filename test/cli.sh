#!/bin/bash
run_local=$(dotenv -f .env get local)
login_url=$(dotenv -f .env get remote_login_url)
base_url=$(dotenv -f .env get remote_base_url)

email=$(dotenv -f .env get email)
password=$(dotenv -f .env get password)
anonKey=$(dotenv -f .env get anonKey)


if [[ $run_local -eq 1 ]]; then
	login_url=$(dotenv -f .env get local_login_url)
	base_url=$(dotenv -f .env get local_base_url)
fi

# comment-out this part for /rest/signin, /rest/signup and /rest/forgotPassword
token=$(curl -X POST $login_url \
	-H "apikey: $anonKey" \
	-H "Content-Type: application/json" \
	-H "Authorization: Bearer $anonKey" \
	--data "{\"email\":\"$email\", \"password\": \"$password\"}" \
	| jq -r '.signInResponse.data.session.access_token')
	
#api_url=$base_url"signup"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"orgName\": \"myCompany-1\", \"email\": \"m@karabacak3.com\", \"password\": \"mypassword\", \"fullname\": \"karabacak3\"}"

#api_url=$base_url"forgotPassword"
#curl -X POST  $api_url -H "apikey: $anonKey" -H "Content-Type: application/json" -H "Authorization: Bearer $anonKey" --data "{\"email\": \"$email\"}"

#api_url=$base_url"addCustomer"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"name\": \"Soyak Insaat\", \"cancel\": 0}"

#api_url=$base_url"addProject"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"name\": \"Kristal Kule\", \"cancel\": 0, \"customerId\": \"c02aa3df-3147-4014-8fd6-e7f064a29ba0\", \"address\": \"4 Levent\"}" | python3 -m json.tool

#api_url=$base_url"getCustomers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool

#api_url=$base_url"getUsers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool

#api_url=$base_url"getProjects"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool

#api_url=$base_url"addMaintainer"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"name\": \"Taygun Yildirim\", \"cancel\": 0, \"phoneNumber\": \"05533366024\", \"isCustomer\": 0}" | python3 -m json.tool

#api_url=$base_url"getMaintainers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool

#api_url=$base_url"updatePassword"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"newPassword\": \"osman\"}"
#
#api_url=$base_url"getElevators"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool
#
#api_url=$base_url"addElevator"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"uniqueId\": \"11-22-33\", \"cancel\": 0, \"name\": \"myname\", \"projectId\": \"a74bb3ef-1830-41bf-b71a-9fc44e57587c\"}" | python3 -m json.tool

#api_url=$base_url"call/initCall"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"mainId\": \"4c6a1881-5a45-4fe5-8c3a-fbac8b7c787a\", \"elevatorId\": \"135fe4ec-291b-45f3-bb8e-f0cad2646b67\"}" 
