import React from "react";
import "App.css";
import User from "containers/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map((contact, index) => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

export default Sidebar;
