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
      <header className="App-header">
        <div className="messages">{chatMessages.map(renderMessage)}</div>
        <div className="inputs">
          <form id="form">
            <input
              name="typemessage"
              id="typemessage"
              type="text"
              placeholder="Enter a message"
            />
            <input
              name="submit"
              id="submit"
              type="submit"
              value="Send Message"
              className="btn"
            />
          </form>
        </div>
      </header>
    </div>
  );
};

export default App;
