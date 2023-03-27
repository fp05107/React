import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=100`
      );
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData.products);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
          // <img src={item.thumbnail}></img>
        ))}
      </ul>
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

export default App;
