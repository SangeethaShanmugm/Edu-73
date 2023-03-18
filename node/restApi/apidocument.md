## Page 1

List of city (GET)
http://localhost:5000/locations

List of restaurants (GET)
http://localhost:5000/restaurants

List of QuickSearch (GET)
http://localhost:5000/quickSearch

restaurants wrt city (GET)
http://localhost:5000/restaurants?stateId=1

## Page 2

List of restaurant wrt Meal
http://localhost:5000/restaurants?mealId=1

Restaurants wrt cuisine & Meal
http://localhost:5000/filter/1?cuisineId=2

Restaurants wrt cost & Meal
http://localhost:5000/filter/1?lcost=800&hcost=1000

Sort on basis of cost
http://localhost:5000/filter/1?lcost=600&hcost=1000&sort=-1

## Page 3

Details of a restaurant

Menu of a restaurant

## Page 4

Menu Details (POST)

PlaceOrder (POST)

## Page 5

List of orders

List of orders wrt to email

update payment details (PUT)

delete orders (DELETE)
