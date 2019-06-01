import { SET_ACTIVE_USER_ID,SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from 'constants/action-types';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
})

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
})

export const sendMessage = (value, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message:value,
    userId
  }
})

export const editMessage = (value, messageId, userId) => ({
  type: EDIT_MESSAGE,
  payload: {
    message:value,
    messageId,
    userId
  }
})

export const deleteMessage = (messageId, user) => ({
  type: DELETE_MESSAGE,
  payload: {
    messageId,
    user
  }
})

