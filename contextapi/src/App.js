import './App.css';
import React from 'react';

function App() {


  return React.createElement("div",{className:"App"},[
    React.createElement("h1",{},"Hello World"),
    React.createElement("h2",{},"Welcome To React")
  ])
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