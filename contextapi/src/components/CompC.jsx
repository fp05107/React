import React from "react";
import { useContext } from "react";
import { AppState } from "../App";

const CompC = () => {
    const Appdata = useContext(AppState);
  return (
    <>
      <div>compC</div>
      <h1>{Appdata}</h1>
    </>
  );
};

export default CompC;
