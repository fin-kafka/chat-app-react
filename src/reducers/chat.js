import { getMessages } from "static-data";
import { Map } from "immutable";
import {
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from "constants/action-types";
import _ from "lodash";

export default (state = Map(getMessages(10)), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return state.set({ number, text: message, is_user_msg: true });
    case DELETE_MESSAGE:
      return state.removeIn([action.payload.user, action.payload.messageId]);
    case EDIT_MESSAGE:
      if (!action.payload.message) {
        return state.removeIn([
          action.payload.userId,
          action.payload.messageId
        ]);
      } else {
        return state.setIn([action.payload.userId, action.payload.messageId], {
          number: action.payload.messageId,
          text: action.payload.message,
          is_user_msg: true
        });
      }
    default:
      return state;
  }
};
