import React from "react";
import ReactDOM from "react-dom";


const App = () => {
  return (
    <div>
      <p>React here changed!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));