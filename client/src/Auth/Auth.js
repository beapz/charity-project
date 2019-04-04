import history from "../history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";
import API from "../services/API";

// debugger
export default class Auth {
  accessToken;
  idToken;
  expiresAt; 
  userProfile;
  isLoggedIn = false;

  constructor() {

    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      clientSecret: AUTH_CONFIG.clientSecret,
      redirectUri: AUTH_CONFIG.callbackUrl,
      responseType: "token id_token",
      //we are asking for these specifics to be returned from Google (openid is general, profile and email we are asking for specifically)
      scope: "openid profile email"
    });
  }

  login = () => {
    // console.log(' hit Auth Login')
    this.auth0.authorize({connection: 'google-oauth2'});
    console.log('this is the login method')
  }

  handleAuthentication = () => { console.log('this is the handleAuthentication method')
    // debugger;
    this.auth0.parseHash((err, authResult) => {

      if(err) {
        console.log(err);
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      this.isLoggedIn = true;
      
      let {
        email,
        family_name,
        given_name,
        nickname,
        picture
      } = authResult.idTokenPayload;

      console.log(email);
      console.log(family_name);
      console.log(given_name);
      console.log(nickname);
      console.log(picture);

      console.log("authResult", authResult);
     
       //setting the returned user information to the session storage
      localStorage.setItem("profile", JSON.stringify(authResult));

      // debugger;
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace(window.location.pathname);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }


    // CREATING A NEW USER 
    console.log("1", authResult.idTokenPayload);
    console.log("n", authResult.idTokenPayload.nickname);
    console.log("e", authResult.idTokenPayload.email);
    console.log("givenname ", authResult.idTokenPayload.given_name);
    console.log("familyname", authResult.idTokenPayload.family_name);
    
    let db_email = authResult.idTokenPayload.email;
    let db_first_name = "";
    let db_last_name = null;

    let returningEmail = "placholder";

    console.log(db_email);
    //API CALL
    API.searchUserEmail(db_email)
    .then(res => {
      
        console.log(res)

        if(res.data.length === 1) {
          returningEmail = res.data[0].email
        }

        console.log("existingEmail second log in then promise", returningEmail);
      
      //if user email does not exist, create new user
      if(!(returningEmail===db_email)){
            if(authResult.idTokenPayload.given_name){
              db_first_name = authResult.idTokenPayload.given_name;
            }else{
              db_first_name = authResult.idTokenPayload.nickname
            }

            if(authResult.idTokenPayload.family_name){
              db_last_name = authResult.idTokenPayload.family_name;
            }
            

            const newUser = {
              first_name: db_first_name,
              last_name: db_last_name,
              email: db_email,
            }

            console.log("newuser",newUser);
            API.createUser({
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              email: newUser.email
            }).then( console.log("createUser complete. "))

          }
          });
      }
    );
    window.location.replace(window.location.pathname);
  }

  getAccessToken = () => {console.log('this is the getAccessToken method')
    return this.accessToken;
  }

  getIdToken = () => { console.log('this is the getIdToken method')
    return this.idToken;
  }

  setSession = (authResult) => { console.log('this is the setSession method')
    console.log("in set session", authResult);

    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    //let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    console.log("pathname", window.location.pathname)
    history.replace(window.location.pathname);
    
  }

  getProfile = (cb) => { console.log('this is the getProfile method')
    console.log("hitting the get profile method");
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
        console.log(profile);
      }
      cb(err, profile);
    });
  }

  renewSession = () => { console.log('this is the renewSession method')
    this.auth0.checkSession({}, (err, authResult) => {
      console.log("before if renewSession", authResult);

      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log("in if renewSession", authResult);

        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log("renew ses err", err);

        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout = () => { console.log('this is the logout method')

    console.log("fire logout");


    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.userProfile = null;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem("isLoggedIn");

    // navigate to the home route
    history.replace(window.location.pathname);
  }

  isAuthenticated = () => { console.log('this is the isAuthenticated method')
    console.log("isauthenticating is firing");

    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    this.isLoggedIn = new Date().getTime() < expiresAt;
    
    return this.isLoggedIn;
  };
}
