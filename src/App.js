import React from "react";
import "./App.css";
import Principal from "./components/carousel/Principal";
import Complementarias from "./components/principales/Complementarias";
import Sera from "./components/sera/Sera";
import Cafe from "./components/cafe/Cafe";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <Principal />
          <Complementarias />
        </div>
        <div className="col-12 col-sm-4">
            <Sera />
            <Cafe />
        </div>
      </div>
    </div>
  );
}

export default App;
