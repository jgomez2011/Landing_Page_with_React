import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light p-5 gap-5 container">
      <h1 className="display-4 ">
        <b>A Warm Welcome!</b>
      </h1>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos?
      </p>
      <hr className="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
        optio! Quibusdam optio earum officia eligendi fugit quas rem nulla ipsa
        beatae odio error sit quo numquam ex quis, ea facilis, dignissimos
        incidunt labore iure, voluptatum eos voluptate pariatur adipisci. Et
        voluptatum voluptatibus nihil nostrum repellat, aliquid similique quam
        quia non.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Call to action
        </a>
      </p>
    </div>
  );
};
export default Jumbotron;