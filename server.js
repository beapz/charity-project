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

//====STRIPE======
//a POST request handler that handles charges for stripe
//extracts the token from request body and uses it to create 
//charge with a desired amount. If charge fails, throw a 500 error. 
app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "A donation to TimeLender.",
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

//===================STRIPE=====================

// // const bodyParser = require('body-parser');
// const cors = require('cors');
// // const Express = require('express');
// const multer = require('multer');
// const Stripe = require('stripe');
// const uuidv4 = require('uuid/v4');

// // TODO: Configure with your test mode secret key.
// const apiKeySecret = 'sk_test_o5C4lwwVMPi7UfpgF1NdnUAS00pPi1sIhO';

// // const app = Express();
// const stripe = Stripe(apiKeySecret);
// const upload = multer();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   req.user = { id: 'asdfasdfasdfasdf' };
//   next();
// });

// app.get('/', (req, res) => {
//   const html = `
//     <p>Welcome. Be sure to configure your Stripe test mode secret key after you have forked this sandbox.</p>
//   `;
//   res.send(html);
// });

// app.post('/find/projects/:projectId', upload.none(), cors(), async (req, res) => {
//   console.log(JSON.stringify(req.body));

//   let error;
//   let status = 'failed';
//   try {
//     const {
//       product,
//       quantity,
//       csrfToken,
//       currency = 'usd',
//       description,
//       stripeBillingAddressCity,
//       stripeBillingAddressCountry,
//       stripeBillingAddressLine1,
//       stripeBillingAddressState,
//       stripeBillingAddressZip,
//       stripeBillingName,
//       stripeEmail,
//       stripeShippingAddressCity,
//       stripeShippingAddressCountry,
//       stripeShippingAddressLine1,
//       stripeShippingAddressState,
//       stripeShippingAddressZip,
//       stripeShippingName,
//       stripeToken,
//       stripeTokenType,
//     } = req.body;

//     // TODO: Assert not a CSRF.

//     let amount;
//     if (product === 'one-for-five') {
//       amount = quantity * 500;
//     } else if (product === 'two-for-nine') {
//       amount = quantity * 900;
//     }

//     // TODO: Lookup existing customer or create a new customer.
//     // TODO: Save relevant billing and shipping address information.
//     const customer = await stripe.customers.create({
//       email: stripeEmail,
//       source: stripeToken,
//       metadata: {
//         userId: req.user.id,
//       },
//     });

//     if (stripeTokenType === 'card') {
//       const idempotency_key = uuidv4();
//       const charge = await stripe.charges.create(
//         {
//           amount,
//           currency: currency,
//           customer: customer.id,
//           description: description,
//         },
//         {
//           idempotency_key,
//         }
//       );
//       console.log('charge:');
//       console.log(JSON.stringify(charge));
//     } else {
//       throw Error(`Unrecognized Stripe token type: "${stripeTokenType}"`);
//     }

//     status = 'success';
//   } catch (err) {
//     console.error(err);
//     error = err;
//   }

//   res.json({ error, status });
// });

//===================END STRIPE ================




db.sequelize.sync(syncOptions).then(function (){
  // Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});

module.exports = app;


