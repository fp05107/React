import './App.css';
import { createContext, useState } from 'react';
import CompA from './components/CompA';

const AppState = createContext();

function App() {

  const [data,setData] = useState("Subham");

  return (
    <div className="App">
      <AppState.Provider value={data}>
        <CompA />
      </AppState.Provider>
    </div>
  );
}

export default App;
export {AppState}
