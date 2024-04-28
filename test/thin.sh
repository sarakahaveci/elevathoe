
rm -rf output.json output.pdf

# get member list
python3 thin.py 'kivanccakmak@gmail.com' '987654321' 'POST' 'getCustomers' '{}'

./show.sh
