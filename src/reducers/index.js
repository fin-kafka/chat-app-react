import { combineReducers } from "redux";

import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import chat from "./chat";
import typing from "./typing";


export default combineReducers({
  user,
  contacts,
  chat,
  typing,
  activeUserId,
  
});
