import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );


}
export function SelectDropDown(props){
  return (
    <select className="custom-select" {...props} >
                {props.children}
  </select>);
  
}
export function SelectDropDownOption(props){
  return (
      // <option selected>{props.displaytext}</option>
      
      <option value={props.value}>{props.opt}</option>
  );
}

export function DateTimePicker(props){
  return (
    <div class="container">
      <div class="row">
          <div class='col-sm-6'>
              <div class="form-group">
                  <div class='input-group date' id='datetimepicker1'>
                      <input type='text' class="form-control" />
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
              </div>
          </div>
          {/* <script type="text/javascript">
              $(function () {
                  $('#datetimepicker1').datetimepicker();
              });
          </script> */}
      </div>
    </div>
      
      
  );
}

