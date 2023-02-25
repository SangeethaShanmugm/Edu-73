class restaurantManager {
  //part1
  //Array of objects
  restaurantList = [
    {
      id: 1,
      restaurantname: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantname: "Dominos",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantname: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantname: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];

  //part(b)
  printAllRestaurantNames = () => {
    return this.restaurantname.map((data) => {
      //return data.restaurantname;
      console.log(data.restaurantname);
    });
  };
}
//console.log(printAllRestaurantNames());
