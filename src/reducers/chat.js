import { getMessages } from "static-data";
import {
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from "constants/action-types";
import _ from "lodash";

export default (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case DELETE_MESSAGE:
      delete state[action.payload.user][action.payload.messageId];
      return state;
    case EDIT_MESSAGE:
      const selectedUserMessages = state[action.payload.userId];
      if (!action.payload.message) {
        delete state[action.payload.userId][action.payload.messageId];
        return state;
      } else {
        return {
          ...state,
          [action.payload.userId]: {
            ...selectedUserMessages,
            [action.payload.messageId]: {
              number: action.payload.messageId,
              is_user_msg: true,
              text: action.payload.message
            }
          }
        };
      }
    default:
      return state;
  }
};
