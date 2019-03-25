import history from "../history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    clientSecret: AUTH_CONFIG.clientSecret,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid profile email"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    // console.log(' hit Auth Login')
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      let {email, family_name, given_name, nickname, picture} = authResult.idTokenPayload;
      console.log(email);
      console.log(family_name);
      console.log(given_name);
      console.log(nickname);
      console.log(picture);

      

      console.log("authResult",authResult)
      debugger;
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace("/books");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    console.log('in set session', authResult);
    
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace("/books");
  }

  getProfile(cb) { console.log('htting the get profile method')
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
        console.log(profile)
      }
      cb(err, profile);
    });
  }

  renewSession() {
    
    this.auth0.checkSession({}, (err, authResult) => {
      console.log('before if renewSession', authResult);

      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('in if renewSession', authResult);
        
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log('renew ses err', err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    console.log('fire logout');
    
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    this.userProfile = null;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    // navigate to the home route
    history.replace("/books");
  }

  isAuthenticated() {
    console.log("isauthenticating is firing")
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
