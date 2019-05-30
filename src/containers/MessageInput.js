import React from "react";
import { setTypingValue, sendMessage } from "actions";
import store from "store";

const MessageInput = (prop) => {
  const { value } = prop
  const state = store.getState();
  
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId))
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />{" "}
    </form>
  );
};

export default MessageInput;
