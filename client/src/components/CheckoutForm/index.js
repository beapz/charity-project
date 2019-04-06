import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./style.css";

class CheckoutForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  async submit(ev) {
   
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) {
            console.log("Purchase Complete!")
            this.setState({complete: true});
        }
      
  }

  render() {
    if (this.state.complete) return <h4>Donation Processed!</h4>;
    return (
        
      <div className="checkout">
        <p>Your donation payment made securely through Stripe&reg;.</p>
        <CardElement />
        <button class="btn-success" id="paymentButton" onClick={this.submit}>Process Donation</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);






// // export default class Checkout extends React.Component {
// //     onToken = (token, addresses) => {
// //         // console.log("inside On Token");
// //         // async submit(ev) {
// //             // let {token} = await this.props.stripe.createToken({name: "Name"});
// //             let response = fetch("/charge", {   //took out await
// //               method: "POST",
// //               headers: {"Content-Type": "text/plain"},
// //               body: token.id
// //             });
          
// //             if (response.ok) alert("Purchase Complete!");
// //           }
// //         //   submit();
// //       // TODO: Send the token information and any other
// //       // relevant information to your payment process
// //       // server, wait for the response, and update the UI
// //       // accordingly. How this is done is up to you. Using
// //       // XHR, fetch, or a GraphQL mutation is typical.
// //         // }
  
// //     render() {
// //       return (
// //         <StripeCheckout
// //             stripeKey="	
// //             pk_test_K3KYvZ9DLO8ZE1pjNNaAq5Ru00FHcCuRjC"
// //             token={this.submit}
// //             amount="500"
// //             billingAddress
// //             description="Awesome Product"
// //             image
// //             locale="auto"
// //             name="TimeLender"
// //             zipCode
// //             label="Yes! I want to add a monetary donation."
// //         />
// //       )
// //     }
// //   }





// // import "./styles.css";

// // TODO: Configure with your test mode publishable key.
// const stripeApiKey = "pk_test_publishable_key";

// // TODO: Head over to https://codesandbox.io/s/311ppyl0m1, fork it, configure
// // with your test mode secret key, and update the following checkout URL using
// // your forked sandbox's ID.
// const checkoutUrl = "https://localhost:3000/api/projects/";

// class Checkout extends React.Component {
//   state = {
//     product: "one-for-five",
//     show: true
//   };

//   handleClose = () => {
//     console.log("App#handleClose");
//   };

//   handleOpen = () => {
//     console.log("App#handleOpen");
//   };

//   handleProductChange = evt => {
//     this.setState({ product: evt.target.value });
//   };

//   toggleShow = () => {
//     this.setState(state => ({
//       show: !state.show
//     }));
//   };

//   /*::
//   type Token = {
//     id: string, // "tok_asdf123asdf123asdf123"
//     object: "token",
//     card: {
//       id: string // "card_asdf123asdf123asdf123"
//       object: "card"
//       address_city: string, // "Anywhere"
//       address_country: string, // "United States"
//       address_line1: string, // "1234 Main St"
//       address_line1_check: string, // "pass"
//       address_line2: string, // `null`
//       address_state: string, // "AL"
//       address_zip: string, // "70000"
//       address_zip_check: string, // "pass"
//       brand: string, // "Visa"
//       country: string, // "US"
//       cvc_check: string, // "pass"
//       dynamic_last4: null,
//       exp_month: number, // 1
//       exp_year: number, // 2019
//       funding: string, // "credit"
//       last4: string, // "4242"
//       metadata: {
//        ...
//       },
//       name: string, // "Bayou Bill"
//       tokenization_method: null
//     }
//     client_ip: string, // "5.5.5.123"
//     created: number, // 1540398618
//     email: string, // "me@example.com"
//     livemode: boolean, // false
//     type: "card"
//     used: boolean, // false
//   }
//   type Addresses = {
//     billing_name: string, // "Bayou B Bill"
//     billing_address_line1: string, // "1234 Main St"
//     billing_address_city: string, // "Anywhere"
//     billing_address_state: string, // "LA"
//     billing_address_zip: string, // "70000"
//     billing_address_country: string, // "United States"
//     billing_address_country_code: string, // "US"
//     shipping_name: string, // "Bayou S Bill"
//     shipping_address_line1: string, // "1234 Main St"
//     shipping_address_city: string, // "Anywhere"
//     shipping_address_state: string, // "LA"
//     shipping_address_zip: string, // "70000"
//     shipping_address_country: string, // "United States"
//     shipping_address_country_code: string, // "US"
//   }
//   */
//   handleToken = (token, addresses) => {
//     console.log("App#handleToken");
//     console.log(token);
//     console.log(addresses);
//     const { product } = this.state;

//     const body = new FormData();
//     // Send information to determine how to charge customer:
//     body.append("product", product);
//     body.append("quantity", 1);

//     // Send standard Stripe information:
//     body.append("stripeEmail", token.email);
//     body.append("stripeToken", token.id);
//     body.append("stripeTokenType", token.type);

//     body.append("stripeBillingName", addresses.billing_name || "");
//     body.append(
//       "stripeBillingAddressLine1",
//       addresses.billing_address_line1 || ""
//     );
//     body.append("stripeBillingAddressZip", addresses.billing_address_zip || "");
//     body.append(
//       "stripeBillingAddressState",
//       addresses.billing_address_state || ""
//     );
//     body.append(
//       "stripeBillingAddressCity",
//       addresses.billing_address_city || ""
//     );
//     body.append(
//       "stripeBillingAddressCountry",
//       addresses.billing_address_country || ""
//     );
//     body.append(
//       "stripeBillingAddressCountryCode",
//       addresses.billing_address_country_code || ""
//     );

//     body.append("stripeShippingName", addresses.shipping_name || "");
//     body.append(
//       "stripeShippingAddressLine1",
//       addresses.shipping_address_line1 || ""
//     );
//     body.append(
//       "stripeShippingAddressZip",
//       addresses.shipping_address_zip || ""
//     );
//     body.append(
//       "stripeShippingAddressState",
//       addresses.shipping_address_state || ""
//     );
//     body.append(
//       "stripeShippingAddressCity",
//       addresses.shipping_address_city || ""
//     );
//     body.append(
//       "stripeShippingAddressCountry",
//       addresses.shipping_address_country || ""
//     );
//     body.append(
//       "stripeShippingAddressCountryCode",
//       addresses.shipping_address_country_code || ""
//     );

//     fetch(checkoutUrl, {
//       method: "POST",
//       body,
//       mode: "cors"
//     })
//       .then(res => {
//         console.log("response received");
//         console.dir(res);
//         return res.json();
//       })
//       .then(result => {
//         console.log("result");
//         console.log(result);
//       })
//       .catch(error => {
//         console.log("error");
//         console.error(
//           error,
//           "You may need to refresh the server sandbox. It hibernates due to inactivity."
//         );
//       });
//   };

//   render() {
//     const { product, show } = this.state;
//     let amount, description, label;
//     if (product === "one-for-five") {
//       amount = 500;
//       description = "Rent an Alligator for $5/day";
//       label = "Rent for $5/day";
//     } else {
//       amount = 900;
//       description = "Rent two Alligators for $9/day";
//       label = "Rent for $9/day";
//     }
//     return (
//       <div className="App">
//         {stripeApiKey === "pk_test_K3KYvZ9DLO8ZE1pjNNaAq5Ru00FHcCuRjC" ? (
//           <p>Configure your Stripe test mode publishable key.</p>
//         ) : (
//           <React.Fragment>
//             <h1>
//               <span aria-label="Gator image" role="img">
//                 🐊
//               </span>
//               Gators for Rent
//             </h1>
//             <div className="App__body">
//               {show && (
//                 <>
//                   <form>
//                     <label>
//                       Rent one for $5/day
//                       <input
//                         type="radio"
//                         name="product"
//                         value="one-for-five"
//                         checked={product === "one-for-five"}
//                         onChange={this.handleProductChange}
//                       />
//                     </label>
//                     <br />
//                     <label>
//                       Rent two for $9/day
//                       <input
//                         type="radio"
//                         name="product"
//                         value="two-for-nine"
//                         checked={product === "two-for-nine"}
//                         onChange={this.handleProductChange}
//                       />
//                     </label>
//                   </form>
//                   <StripeCheckout
//                     allowRememberMe={false}
//                     amount={amount}
//                     billingAddress
//                     closed={this.handleClose}
//                     description={description}
//                     // image="https://stripe.com/img/documentation/checkout/marketplace.png"
//                     image="https://alligator.io/images/alligator-logo3.svg"
//                     label="Pay with 💳"
//                     locale="auto"
//                     name="Alligator.io"
//                     opened={this.handleOpen}
//                     panelLabel="Rent for {{amount}}"
//                     // shippingAddress
//                     stripeKey={stripeApiKey}
//                     token={this.handleToken}
//                     zipCode
//                   />
//                 </>
//               )}
//               <br />
//               <br />
//               <br />
//               <br />
//               <p className="text-muted">
//                 You may use the following for testing:
//               </p>
//               <ul className="text-muted">
//                 <li>Credit Card Number: 4242 4242 4242 4242</li>
//                 <li>MM/YY: Any present or future date.</li>
//                 <li>CVC: Any three digits, e.g., 123.</li>
//               </ul>
//               <p className="text-muted">
//                 See{" "}
//                 <a href="https://stripe.com/docs/testing" target="_blank">
//                   Stripe Testing
//                 </a>{" "}
//                 for more options.
//               </p>
//               <br />
//               <br />
//               <p className="text-muted">
//                 After making a change here, it seems that the page sometimes
//                 needs to be manually refreshed. May be a bug with CodeSandbox.
//               </p>
//             </div>
//             <footer className="App__foot">
//               {/*
//                 This button allows the StripeCheckout component to be mounted and unmounted to
//                 confirm that it behaves as expected.
//                 */}
//               <button className="btn btn-primary" onClick={this.toggleShow}>
//                 {show ? "Unmount Form" : "Mount Form"}
//               </button>
//             </footer>
//           </React.Fragment>
//         )}
//       </div>
//     );
//   }
// }

// export default Checkout;