const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
var fs = require("fs");
var https = require("https");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  session({
    secret: "da illest developer",
    resave: true,
    saveUninitialized: true
  })
);

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

const fbOpts = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "https://localhost:3001/auth/facebook/callback"
};

const fbCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile);
};

passport.use(new FacebookStrategy(fbOpts, fbCallback));

app.route("/auth/facebook/callback").get(passport.authenticate("facebook"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Start the API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT https://localhost:${PORT}`);
  });
} else {
  https
    .createServer(
      {
        key: fs.readFileSync("server.key"),
        cert: fs.readFileSync("server.cert")
      },
      app
    )
    .listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT https://localhost:${PORT}`);
      
    });
}
