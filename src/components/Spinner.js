import React, { Component } from "react";
import spinner from "../spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center my-3">
        <img src={spinner} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
