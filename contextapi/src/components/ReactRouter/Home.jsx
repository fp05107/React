import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/project" element = {<Project />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
