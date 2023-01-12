import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import ChatWindow from "./ChatWindow";
import ChatComposer from "./ChatComposer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: "Second stored message",
          name: "Gregory Goolsby",
          time: "17:28",
          color: "Red"
        }
      ]
    };
  }

  // if new message was submitted from child component // process
  submitted = (getNewMessage) => {
    if (getNewMessage !== "") {
      // match the state format
      const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
      const RandomNameRender =
        user_list[Math.floor(Math.random() * user_list.length)];
      const items = ["Red", "blue", "green"];
      const RandomGen = items[Math.floor(Math.random() * items.length)];
      const date = new Date();
      const a = date.getHours();
      const b = date.getMinutes();
      const newMessage = {
        text: getNewMessage,
        name: RandomNameRender,
        time: `${a}:${b}`,
        color: RandomGen
      };
      // merge new message in copy of state stored messages
      let updatedMessages = [...this.state.messages, newMessage];
      // update state
      this.setState({
        messages: updatedMessages
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="topSec">
          <div className="introduction">
            <h1 className="h1">Introductions</h1>
            <p className="p1">this Channel is for company wider chatter</p>
          </div>
          <div>
            <p className="p2">
              3<span>|100</span>
              <span className="multiUser">
                <i class="fa-solid fa-user-group"></i>
              </span>
            </p>
          </div>
        </div>
        <hr />
        {/* send stored messages as props to chat window */}
        <ChatWindow messagesList={this.state.messages} />
        {/* send submitted props to chat composer */}
        <ChatComposer submitted={this.submitted} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
