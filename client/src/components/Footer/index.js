import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <nav className="navbar  navbar-light bg-light">
      <div class="container">
        <div class="row">
          <div class="col-4-md card foot-card">
            <div class="card-body">
              <div class="links">
                <a href="/">Home</a>
              </div>
              <div class="links">
                <a href="/create">Create A Project</a>
              </div>
              <div class="links">
                <a href="/find">Get Involved</a>
              </div>
              <div class="links">
                <a href=" https://app.termly.io/document/privacy-policy/53512c34-0321-4d95-92fd-28189aeae6aa">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div class="col-4-md card contact-card foot-card ">
            <h5 class="card-title">Contact</h5>
            <div class="card-body contact">nuevaproject3@gmail.com</div>
            <div id="social">
              <i class="fab fa-instagram" />
            </div>
            <div id="social">
              <i class="fab fa-facebook" />
            </div>
            <div id="social">
              <i class="fab fa-twitter" />
            </div>
          </div>
          <div class="col-4-md card ms-card foot-card">
            <div class="card-body">
              This is where the mission statement needs to go, we should have
              all the fonts match
            </div>
          </div>
        </div>
        <div class="row copyright ">
          <div class='col-12-md copyright'>
            <p> &copy; Timelenders</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
