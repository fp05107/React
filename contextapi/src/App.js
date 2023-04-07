import "./App.css";
import React from "react";
import ResponsiveAppBar from "./components/ReactRouter/ResponsiveAppBar";
import Home from "./components/ReactRouter/Home";


function App() {
 
  return (
    <div>
      <Home />
      <ResponsiveAppBar />
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
