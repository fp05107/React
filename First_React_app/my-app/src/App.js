import "./App.css";
import { useState,useEffect } from "react";
import Contact from "./components/Contact"
import About from "./components/About"
import Main from "./components/Main"
import {
  Link,
  NavLink
} from "react-router-dom";


function App() {
  
  const navLinkStyles = ({isActive}) =>{
    return{
      textDecoration: isActive ? "none" : "underline",
      color : isActive ? "red" : "white",
    };
  }

  return (
    <div className="App">
      <NavLink style={navLinkStyles} to="/">Home</NavLink>
      <NavLink style={navLinkStyles} to="/about">About</NavLink>
      <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
    </div>
  );
}

// import Movie from "./components/Movie";
// import movies from "./Movies.json";
// import React, { useState } from "react";

// let [num, setNum] = useState(1);

// let inc = () => {
//   setNum(num + 2);
// };
// let dec = () => {
//   setNum(num - 2);
// };
// function inc(){
//   setNum(num+1);
// }
// function dec(){
//   setNum(num-2);
// }

/* <Header />
<div>
  <h1>{num}</h1>
  <button onClick={inc}>Increament</button>
  <button onClick={() =>{inc()}}>Increament</button>
  <button onClick={dec}>Decreament</button>
</div>
{
movies.map((el,index) =>{
  return <Movie img = {el.Poster}
         name = {el.Title}
         year = {el.Year} />
})
} */


// const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=100`
//       );
//       const jsonData = await response.json();
//       console.log(jsonData)
//       setData(jsonData.products);
//     };
//     fetchData();
//   }, []);

{/* <h1>Todo List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
          // <img src={item.thumbnail}></img>
        ))}
      </ul> */}

export default App;
