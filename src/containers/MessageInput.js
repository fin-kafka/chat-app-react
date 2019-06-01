import React from "react";
import { setTypingValue, sendMessage, editMessage } from "actions";
import store from "store";

const MessageInput = props => {
  const { value, editId } = props;
  const state = store.getState();

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
    props.scrollToBottom(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    editId
      ? store.dispatch(editMessage(typing, editId, activeUserId))
      : store.dispatch(sendMessage(typing, activeUserId));
    props.setEditId("");
    props.scrollToBottom(true);
    store.dispatch(setTypingValue(""));
  };

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
