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

# forgot password
#api_url=$base_url"forgotPassword"
#curl -X POST  $api_url -H "apikey: $anonKey" -H "Content-Type: application/json" -H "Authorization: Bearer $anonKey" --data "{\"email\": \"$email\"}"

#api_url=$base_url"addCustomer"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"name\": \"burj el arab\", \"cancel\": 0}"
#
#api_url=$base_url"getCustomers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"

#api_url=$base_url"getUsers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"
#
#api_url=$base_url"getProjects"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"
#
#api_url=$base_url"getMaintainers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"
#
#api_url=$base_url"getElevators"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"
#
api_url=$base_url"updatePassword"
curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"newPassword\": \"osman\"}"
