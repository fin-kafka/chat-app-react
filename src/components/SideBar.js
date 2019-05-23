import React from "react";
import "../App.css";
import User from "../containers/User";
import store from '../store'
import {setUser} from '../actions'

const handleUserClick =(user_id) => {
  console.log(user_id)
  store.dispatch(setUser(user_id))
}

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map((contact, index) => (
        <User user={contact} key={contact.user_id} onclick={handleUserClick} />
      ))}
    </aside>
  );
};

export default Sidebar;
