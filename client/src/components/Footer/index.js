import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-4-md card foot-card">
            <div className="card-body">
              <div className="links">
                <a href="/">Home</a>
              </div>
              <div className="links">
                <a href="/create">Create A Project</a>
              </div>
              <div className="links">
                <a href="/find">Get Involved</a>
              </div>
              <div className="links">
                <a href=" https://app.termly.io/document/privacy-policy/53512c34-0321-4d95-92fd-28189aeae6aa">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="col-4-md card contact-card foot-card ">
            <h5 className="card-title">Contact</h5>
            <div className="card-body contact">Timelender@gmail.com</div>
            <div id="social">

              <span className="fab fa-instagram" />
        
              <span className="fab fa-facebook" />
           
              <span className="fab fa-twitter" />

            </div>
          </div>
          <div className="col-4-md card ms-card foot-card">
            <div className="card-body">
              This is where the mission statement needs to go, we should have
              all the fonts match
            </div>
          </div>
        </div>

        <div className="row copyright ">
          <div className='col-12-md copyright'>
            <div> &copy; Timelender</div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
