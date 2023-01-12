import React, { Component } from "react";
import Picker from "emoji-picker-react";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

// we are using class componen coz we need temp state here
export default class ChatComposer extends Component {
  // temp state to only store new single message
  state = { inputStr: "", showPicker: false };

  // if form was submitted, notify parent component
  handleSubmit = (event) => {
    event.preventDefault();
    // send event value to parent component via calling props
    this.props.submitted(this.state.inputStr);
    // remove single message stored in this component state
    // and empty input coz form was submitted
    this.setState({
      inputStr: ""
    });
  };

  // on input check if its not empty and store single message
  // in this component state
  handleCompose = (event) => {
    let typedValue = event.target.value;
    if (typedValue !== "" && typedValue !== " ") {
      // store new single message temporarily
      this.setState({
        inputStr: event.target.value
      });
    }
  };

  onEmojiClick = (event, emojiObject) => {
    const { inputStr, showPicker } = this.state;
    const pick = inputStr + emojiObject.emoji;
    console.log(showPicker);

    this.setState({
      new: pick,
      showPicker: false
    });
  };

  setShowPicker = () => {
    const { showPicker } = this.state;
    this.setState({ showPicker: !showPicker });
  };

  render() {
    const { showPicker } = this.state;
    return (
      // dont use event => handle event below
      // binding won't work here
      <div className="chat-composer">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            placeholder="Type Message"
            onChange={this.handleCompose}
            value={this.state.inputStr}
          />
          <BsFillEmojiSunglassesFill
            className="emoji"
            onClick={this.setShowPicker}
          />
          {showPicker && (
            <Picker
              pickerStyle={{ width: "100%" }}
              onEmojiClick={this.onEmojiClick}
            />
          )}
        </form>
      </div>
    );
  }
}
