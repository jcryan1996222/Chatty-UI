import React, { useState } from "react";

import logo from "./logo.svg";
import * as chatMessages from "./chatMessages";
import "./App.css";

function renderMessage(x) {
  return <p>{x.message}</p>;
}

function addMessageToMessages(message, messages) {
  return [...messages, message];
}

const App = () => {
  const [messages, setMessages] = useState(chatMessages);

  const [chatMessage, setChatMessage] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="messages-container">{messages.map(renderMessage)}</div>
        <div className="inputs">
          <form id="form">
            <input
              onChange={event => setChatMessage(event.target.value)}
              name="typemessage"
              className="chat-message-input"
              type="text"
              placeholder="Enter a message"
              value={chatMessage}
            />
            <button
              onClick={e => {
                e.preventDefault();
                setMessages(
                  addMessageToMessages({ message: chatMessage }, messages)
                );
              }}
              name="submit"
              id="submit"
              type="submit"
              value="Send Message"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default App;
