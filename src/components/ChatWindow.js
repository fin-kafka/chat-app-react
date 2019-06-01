import React, { useState } from "react";
import store from "store";
import Header from "components/Header";
import Chats from "containers/Chats";
import MessageInput from "containers/MessageInput";
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.chat[activeUserId];
  const { typing } = state;

  const [id, setId] = useState("");
  const [shouldScroll, setScroll] = useState(false);

  const setEditId = id => {
    setId(id);
  };

  const setScrollPos = handleScroll => {
    setScroll(handleScroll);
  };

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats
        messages={_.values(activeMsgs)}
        user={activeUser.user_id}
        setEditId={setEditId}
        scrollToBottom={setScrollPos}
        setScroll={shouldScroll}
      />
      <MessageInput
        value={typing}
        editId={id}
        setEditId={setEditId}
        scrollToBottom={setScrollPos}
      />
    </div>
  );
};

export default ChatWindow;
