import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { decrement, increment } from "./redux/counter/counter.actions";
import { toggleTheme } from "./redux/theme/theme.actions.js";

function App() {
  const count = useSelector((store) => store.counterManager.count);
  const theme = useSelector((store) => store.themeManager.theme);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: theme,
          color: theme == "white" ? "black" : "white",
        }}
      >
        <button onClick={() => dispatch(toggleTheme())}> Toggle Theme</button>

        <div className="card">
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>INC</button>
          <button onClick={() => dispatch(decrement())}>DEC</button>
        </div>
      </div>
    </>
  );
}

export default App;
