import React from "react";

import './style.css';

function Jumbotron({ children }) {
  return (
    // <div
    //   style={{ height: 500, clear: "both", paddingTop: 120, textAlign: "center" }}
    //   className="jumbotron container-fluid hiRes"
    // >
    //   {children}
    // </div>

  <div className="jumbotron-fluid hiRes">
    <div className="over container body-content">
      {children}
    </div>
  </div>
  );
}

export default Jumbotron;
