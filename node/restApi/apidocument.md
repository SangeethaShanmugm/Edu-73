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
http://localhost:5000/details/640dd33316a73dc1d72e73ca

http://localhost:5000/details/2

Menu of a restaurant
http://localhost:5000/menu/5

## Page 4

Menu Details (POST)
http://localhost:5000/menuItem

PlaceOrder (POST)
http://localhost:5000/placeorder

## Page 5

List of orders
http://localhost:5000/orders

List of orders wrt to email
http://localhost:5000/orders?email=john@gmail.com

update payment details (PUT)

delete orders (DELETE)
http://localhost:5000/deleteOrder/641714c9c92db0db3b9f8677
