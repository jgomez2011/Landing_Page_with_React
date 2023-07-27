import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";

const Body = () => {
return (
    <div>
    <Jumbotron />
    <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
        <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Card />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Card />
        </div>
    </div>
    </div>
);
};

export default Body;
