const SET_SENDER_NAME = "SET_SENDER_NAME";
const SET_SENDER_EMAIL = "SET_SENDER_EMAIL";

const initialState = {
  sentMessages: []
};

let sentMessages = (state = initialState, action) => {
  switch (action.type) {
    case SET_SENDER_NAME: {
      let newState = {
        ...state,
        ...state.currentMessage,
        ...state.currentMessage.sender
      };
      newState.currentMessage.sender.name = action.setNameText;
      return newState;
    }
    case SET_SENDER_EMAIL: {
      let newState = {
        ...state,
        ...state.currentMessage,
        ...state.currentMessage.sender
      };
      newState.currentMessage.sender.email = action.setEmailText;
      return newState;
    }
    default:
      return state;
  }
};

export let setSenderNameAC = setNameText => {
  return {
    type: SET_SENDER_NAME,
    setNameText
  };
};

export let setSenderEmalAC = setEmailText => {
  return {
    type: SET_SENDER_EMAIL,
    setEmailText
  };
};

export default sentMessages;
