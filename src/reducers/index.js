import { combineReducers } from "redux";

import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  contacts,
  activeUserId
});
