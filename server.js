require("dotenv").config();
const express = require("express");

//require stripe
const stripe = require("stripe")("sk_test_o5C4lwwVMPi7UfpgF1NdnUAS00pPi1sIhO");


//require models folder with sql schemas
const db = require("./models");

// const mongoose = require("mongoose"); 
const routes = require("./routes");


const app = express();
const bodyParser = require("body-parser");


const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
//STRIPE body parser to parse token that was received from client
app.use(require("body-parser").text());

//just added:
// process.env.NODE_ENV = "production";

//a POST request handler that handles charges for stripe
//extracts the token from request body and uses it to create 
//charge with a desired amount. If charge fails, throw a 500 error. 
app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

var syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function (){
  // Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});

module.exports = app;


