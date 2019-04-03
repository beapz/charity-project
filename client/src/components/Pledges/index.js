import React from "react";
import Moment from 'react-moment';
// import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Pledges({ first_name, last_name, hours_pledged }) {
    return (
        // <div className='tile-full'>
        //     <a href={'/find/projects/' + id}>

        <Row className="Pledgees">
            <Col size='md-6'>
                <div className='pledgeeName'>{first_name + " " + last_name}</div>
            </Col>

            <Col size="md-6t">
                <div className="pledgeeHours">{hours_pledged}</div>
            </Col>
        </Row>

        //     </a>
        // </div>
    );
}

export default Pledges;









// export function HoursInput(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />>
//     </div>

//     <div className="form-group">
//       <input type="text" name="Add Hours to Commit" {...props} />
//     </div>

//     <div>
//       <input {...props} type="submit" name="Commit Hours" />
//     </div>
//   );

// }

// // export function TextArea(props) {
// //   return (
// //     <div className="form-group">
// //       <input type="text" name="Add Hours to Commit" {...props} />
// //     </div>

// //   );
// // }

// // export function FormBtn(props) {
// //   return (
// //     <input {...props} type="submit" name="Commit Hours" />
// //   );
// // }



// export default HoursInput;

