import React from "react";
import './style.css';

function Tiles({ title, children }) {
  return (




    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i aria-hidden="true" /> 
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Tiles;

