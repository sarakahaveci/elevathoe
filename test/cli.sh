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

api_url=$base_url"getCustomers"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"start\": 0, \"finish\": 10}" | python3 -m json.tool
curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"start\": 0, \"finish\": 10, \"text\": \"Soy\"}" | python3 -m json.tool

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

#api_url=$base_url"getElevators"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}" | python3 -m json.tool

#api_url=$base_url"addElevator"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"update\": 0, \"uniqueId\": \"11-22-33\", \"cancel\": 0, \"name\": \"myname\", \"projectId\": \"a74bb3ef-1830-41bf-b71a-9fc44e57587c\"}" | python3 -m json.tool

#api_url=$base_url"call/initCall"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"mainId\": \"4c6a1881-5a45-4fe5-8c3a-fbac8b7c787a\", \"elevatorId\": \"135fe4ec-291b-45f3-bb8e-f0cad2646b67\"}" 

#api_url=$base_url"call/setOpenTime"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"entryId\": \"4be191c6-702e-464b-811d-7af81d04d6d8\"}" 

#api_url=$base_url"call/setClosedTime"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"entryId\": \"4be191c6-702e-464b-811d-7af81d04d6d8\"}" 

#api_url=$base_url"call/getCalls"
#curl -X POST  $api_url -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"entryId\": \"4be191c6-702e-464b-811d-7af81d04d6d8\"}"  | python3 -m json.tool
#

# UPDATE-PASSWORD-LINK
#https://e-front-alpha.vercel.app/pages/auth/reset-password-v1/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYXJneWFuY2xva2JjcmFnYXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3Mzg1NzUsImV4cCI6MjAyMTMxNDU3NX0.c8h74b1YIhcd4Y1CFVLvJKqAMVXRAH1h2UXLGJ9cNqQ#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6InFiZHFOR3plbTZ0WXFidXAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExMDA4MTg4LCJpYXQiOjE3MTEwMDQ1ODgsImlzcyI6Imh0dHBzOi8vY2lhcmd5YW5jbG9rYmNyYWdhcncuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjZkMDg5YjMzLTAzODEtNDVkNy1iZmY1LTM4NWZjYzRmNTZiZSIsImVtYWlsIjoia2l2YW5jY2FrbWFrQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcxMTAwNDU4OH1dLCJzZXNzaW9uX2lkIjoiNjVmMjdhMDAtYjRiMy00MmZlLTlhZjQtZGRiYWM2ZThkNjgyIn0.GTm9PBVD2qR8n5MVoMYgqAUv11sJ20Pv9YqkvrIk71s&expires_at=1711008188&expires_in=3600&refresh_token=1Sf0Ft6BCngSk0oRJT1E5Q&token_type=bearer&type=recovery

#apikey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYXJneWFuY2xva2JjcmFnYXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3Mzg1NzUsImV4cCI6MjAyMTMxNDU3NX0.c8h74b1YIhcd4Y1CFVLvJKqAMVXRAH1h2UXLGJ9cNqQ"

#token="eyJhbGciOiJIUzI1NiIsImtpZCI6InFiZHFOR3plbTZ0WXFidXAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExMDA4MTg4LCJpYXQiOjE3MTEwMDQ1ODgsImlzcyI6Imh0dHBzOi8vY2lhcmd5YW5jbG9rYmNyYWdhcncuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjZkMDg5YjMzLTAzODEtNDVkNy1iZmY1LTM4NWZjYzRmNTZiZSIsImVtYWlsIjoia2l2YW5jY2FrbWFrQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcxMTAwNDU4OH1dLCJzZXNzaW9uX2lkIjoiNjVmMjdhMDAtYjRiMy00MmZlLTlhZjQtZGRiYWM2ZThkNjgyIn0.GTm9PBVD2qR8n5MVoMYgqAUv11sJ20Pv9YqkvrIk71s"

#api_url=$base_url"updatePassword"
#curl -X POST  $api_url -H "apikey: $apikey" -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"newPassword\": \"123456789\"}"
#
#api_url=$base_url"addProjectMaintainer"
#curl -X POST  $api_url -H "apikey: $apikey" -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"projectId\": \"a74bb3ef-1830-41bf-b71a-9fc44e57587c\", \"maintainerId\": \"4c6a1881-5a45-4fe5-8c3a-fbac8b7c787a\", \"update\": 0, \"cancel\": 0, \"entryId\": \"\"}"
#
#api_url=$base_url"doTrial"
#curl -X POST  $api_url -H "apikey: $apikey" -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{}"
#
#api_url=$base_url"doTrial"
#curl -X POST  $api_url -H "apikey: $apikey" -H "Content-Type: application/json" -H "Authorization: Bearer $token" --data "{\"cancel\": 1, \"id\": 9, \"update\": 1}"
