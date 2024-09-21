import React from "react";
import spinner from "../spinner.gif";

const Spinner = () => {
  return (
    <div className="container text-center my-3">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
