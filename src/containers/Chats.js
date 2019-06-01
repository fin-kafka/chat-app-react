import React, { Component } from "react";
import store from "store";
import { setTypingValue, deleteMessage } from "actions";

const Chat = ({ message, onClick, deleteMessage }) => {
  const { text, is_user_msg } = message;
  return (
    <span
      className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
      onClick={is_user_msg ? onClick : null}
    >
      <i className="delete-message" onClick={deleteMessage} />
      {text}
    </span>
  );
};

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate(props) {
    return props.setScroll ? this.scrollToBottom() : null;
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  handleEdit = (e, id) => {
    store.dispatch(setTypingValue(e.target.textContent));
    this.props.setEditId(id);
    this.props.scrollToBottom(false);
  };

  handleDelete = (id, userId) => {
    store.dispatch(deleteMessage(id, userId));
    this.props.scrollToBottom(false);
  };

  render() {
    const { messages, user } = this.props;
    return (
      <div className="Chats" ref={this.chatsRef}>
        {messages.map(message => (
          <Chat
            message={message}
            key={message.number}
            onClick={e => this.handleEdit(e, message.number)}
            deleteMessage={() => this.handleDelete(message.number, user)}
          />
        ))}{" "}
      </div>
    );
  }
}
