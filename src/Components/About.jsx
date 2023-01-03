import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="sendtask">
        <h1>About Page</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default About;
