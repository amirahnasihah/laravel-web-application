// try put hello
// issue error occur, bc here its a component like in Example.js file in jsx format
// jsx use className instead of class

import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Table class going to extends the React component
// Class can have multiple functions, for fetching the data from database
// and call render() function, and inside the render function can pass the jsx
class Space extends Component {


  // constructor to set up the default variables, and 
  // if there is any props, can have access to it, so can use these props
  // react use state, so any property variable can update using state: this.state = {} equals an object which is going have the variables
  constructor(props) {
    super(props);  // can use props


    this.state = {
      // : bcs inside object, inside object dont use = sign
      spaces: [], // this spaces going to put data inside it & loop thru that data & display it at render() function <tbody>, so need to go to laravel side, using terminal
    }
  }



  // Life cycle method = it do once the component is mounted its going to call the function here say componentdidmount
  componentDidMount() {
    this.getSpaceList();
  }



  // function that going to get the data (Task list)
  getSpaceList = () => {
    axios.get('/get/workspace/list').then(function(response) {
      console.log(response);
    });
  }





  render() {
    return (
      <table class="table table-hover">
          <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>

      </table>
  );
  }
}


export default Space;
