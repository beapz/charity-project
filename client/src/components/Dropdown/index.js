import React, {Component} from "react";
import { Row, Col } from "../Grid";
import "./style.css";
import API from "../../services/API";

class Dropdown extends Component {

  state = {
    categories: [],
    message: 'Categories be here'
  };

  componentDidMount() {
    this.getCatgories();
  }

  getCatgories = () => {
    API.getCatgories()
      .then(res => this.setState({categories: res.data}))
      .catch(() => this.setState({
        categories: [],
        message: "that didn't work"
      }));
  };

  render() {
    return (
      <form>
  
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" dataToggle="dropdown" ariaHaspopup="true" ariaExpanded="false">Example select</button>
          <div className="dropdown-menu"  >
            {this.state.catgories.map(category => +(
              <a className="dropdown-item"id={category.id}>{category.name}</a>
            ))}
          
          </div>
        </div>
      </form>
    );
  }

}


export default Dropdown;