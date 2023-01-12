import React, { Component } from "react";
import Math from "math";
import { MdWavingHand } from "react-icons/md";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

// we are using class component here bcoz functional components cant use react life cycle hooks such as componentDidUpdate
export default class ChatWindow extends Component {
  // if this component received new props, move scroll chat window
  // to view latest message
  componentDidUpdate = (prevProps, prevState) => {
    // if component received new props
    if (this.props.messagesList !== prevProps.messagesList) {
      // call ref and scroll
      this.messageListEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

  NameColor = () => {
    const items = ["Red", "blue", "green"];
    const RandomGen = items[Math.floor(Math.random() * items.length)];
    console.log(RandomGen);
    return RandomGen;
  };

  render() {
    // messagesList the got the messages stored in state
    // destructuring
    const { messagesList } = this.props;
    const color = this.NameColor();

    return (
      <div className="chat-window">
        <div className="box">
          <div className="inner">
            <div className="chatMess">
              <div>
                <p className={color}>pB</p>
              </div>
              <div className="NameAndMess2">
                <div className="NameAndMess">
                  <p className="chatName">PubNub Bot</p>
                  <p className="time">12:16</p>
                </div>
                <p className="message">
                  Welcome to team chat.
                  <MdWavingHand className="waving" />
                  <MdWavingHand className="waving" /> Send a message now to
                  start interacting with other users in the app.{" "}
                  <BsFillArrowDownSquareFill />
                </p>
              </div>
            </div>
            {Array.isArray(messagesList) &&
              messagesList.map((oneMessage, index) => {
                const name = oneMessage.name.split(" ");
                const output = `${name[0][0]}${name[0][1]}`;
                const color = this.NameColor();
                return (
                  <>
                    <div className="chatMess">
                      <div>
                        <p key={index} className={oneMessage.color}>
                          {output}
                        </p>
                      </div>
                      <div className="NameAndMess2">
                        <div className="NameAndMess">
                          <p key={index} className="chatName">
                            {oneMessage.name}
                          </p>
                          <p className="time">{oneMessage.time}</p>
                        </div>
                        <p key={index} className="message">
                          {oneMessage.text}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            {/* define ref and call it if component is updated */}
            <div
              className="reference"
              ref={(node) => (this.messageListEnd = node)}
            />
          </div>
        </div>
      </div>
    );
  }
}
