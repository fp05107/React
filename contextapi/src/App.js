import "./App.css";
import React from "react";
import Profile from "./components/Profile";

function Button() {
  return <button>Add</button>;
}

function App() {
  const arr = [
    {
      src: "https://avatars.githubusercontent.com/u/105980734?v=4",
      name: "Subham",
    },
    {
      src: "https://avatars.githubusercontent.com/u/105980734?v=4",
      name: "Subham",
    },
    {
      src: "https://avatars.githubusercontent.com/u/105980734?v=4",
      name: "Subham",
    },
    {
      src: "https://avatars.githubusercontent.com/u/105980734?v=4",
      name: "Subham",
    },
    {
      src: "https://avatars.githubusercontent.com/u/105980734?v=4",
      name: "Subham",
    },
  ];
  return (
    <div>
      {
        arr.map((el) =>(
          <Profile src = {el.src} name = {el.name}/>
        ))
      }
    </div>
  );
}

export default App;

// export {AppState}
// const [data,setData] = useState("Subham");
// import { createContext, useState } from 'react';
// import CompA from './components/CompA';

// const AppState = createContext();
// <AppState.Provider value={data}>
// <CompA />
// </AppState.Provider>
