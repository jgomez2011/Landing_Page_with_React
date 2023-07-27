import React from "react";
import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
return (
    <div>
    <Navbar />
    <div>
        <Body />
    </div>
    <div>
        <Footer />
    </div>
    </div>
);
};

export default Home;
