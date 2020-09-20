import React from "react";

import logo from "./logo.svg";
import * as chatMessages from "./chatMessages";
import "./App.css";

function renderMessage(x) {
  return <p>{x.message}</p>;
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{chatMessages.map(renderMessage)}</header>
    </div>
  );
};

export default App;
