const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();
let db;
//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//console.log(process.env);
const MONGO_URL = process.env.MONGO_URL;

//REST API endpoints
app.get("/", function (req, res) {
  res.send("Hello Everyone🥳🥳🥳");
});

//get locations

app.get("/locations", function (req, res) {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get mealType

app.get("/quickSearch", function (req, res) {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get list of restaurant

app.get("/restaurants", function (req, res) {
  let query = {};
  let stateId = Number(req.query.stateId);
  let mealId = Number(req.query.mealId);

  if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }
  db.collection("zomato")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//filter

app.get("/filter/:mealId", function (req, res) {
  let query = {};
  let sort = { cost: 1 };
  let mealId = Number(req.params.mealId);
  let cuisineId = Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }

  if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
    };
  } else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  } else if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }
  db.collection("zomato")
    .find(query)
    .sort(sort)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//restaurant details

app.get("/details/:id", function (req, res) {
  // let id = mongo.ObjectId(req.params.id);
  let id = Number(req.params.id);
  db.collection("zomato")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//meals details for restaurant

app.get("/menu/:id", function (req, res) {
  let id = Number(req.params.id);
  db.collection("menu")
    .find({ restaurant_id: id })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//place order

app.post("/placeorder", function (req, res) {
  console.log(req.body);
  db.collection("orders").insert(req.body, (err, result) => {
    if (err) throw err;
    res.send("Order Placed");
  });
});

//Menu Details

app.post("/menuItem", function (req, res) {
  if (Array.isArray(req.body.id)) {
    db.collection("menu")
      .find({ menu_id: { $in: req.body.id } })
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  } else {
    res.send("Invalid input");
  }
});

//list of orders

app.get("/orders", function (req, res) {
  let query = {};
  let email = req.query.email;
  if (email) {
    query = { email };
  }
  db.collection("orders")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//update Order

app.put("/updateOrder/:id", function (req, res) {
  let oid = Number(req.params.id);
  db.collection("orders").updateOne(
    { orderId: oid },
    {
      $set: {
        status: req.body.status,
        bank_name: req.body.bank_name,
        date: req.body.date,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.send("Order updated");
    }
  );
});

//delete orders

app.delete("/deleteOrder/:id", function (req, res) {
  let _id = mongo.ObjectId(req.params.id);
  db.collection("orders").deleteOne({ _id }, (err, result) => {
    if (err) throw err;
    res.send("Order Deleted");
  });
});

//Mongodb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db("ed73we");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
