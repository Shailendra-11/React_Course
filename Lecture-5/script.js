import React from "react";
import ReactDOM from "react-dom";
 import Hook from "./hook";
const Main = () => {
  return (
    <div className="main">
       <Hook/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(
  <>
    <Main />
  </>
);
