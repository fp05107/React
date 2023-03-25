import "./App.css";
import Header from "./components/Header.js";
import Movie from "./components/Movie";
import movies from "./Movies.json";
import React, { useState } from "react";

function App() {
  let [num, setNum] = useState(1);

  let inc = () => {
    setNum(num + 2);
  };
  let dec = () => {
    setNum(num - 2);
  };
  // function inc(){
  //   setNum(num+1);
  // }
  // function dec(){
  //   setNum(num-2);
  // }
  return (
    <div className="App">
      <Header />
      <div>
        <h1>{num}</h1>
        <button onClick={inc}>Increament</button>
        <button onClick={dec}>Decreament</button>
      </div>
     {
      movies.map((el,index) =>{
        return <Movie img = {el.Poster}
               name = {el.Title}
               year = {el.Year} />
      })
     }
    </div>
  );
}

export default App;
