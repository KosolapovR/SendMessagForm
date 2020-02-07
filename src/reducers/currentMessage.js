const CHANGE_FROM_NAME = "CHANGE_FROM_NAME";
const CHANGE_FROM_EMAIL = "CHANGE_FROM_EMAIL";

const initialState = {
  sender: {
    name: "",
    email: "",
    newNameText: "",
    newEmailText: ""
  },
  recipient: {
    name: "",
    email: "",
    newNameText: "",
    newEmailText: ""
  },
  title: "",
  body: "",
  files: [],
  status: "",
  date: "",
  newTitleText: "",
  newBodyText: ""
};

let currentMessage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FROM_NAME: {
      let newState = {
        ...state,
        ...state.currentMessage,
        ...state.currentMessage.sender
      };
      newState.currentMessage.sender.name = action.newNameText;
      return newState;
    }
    case CHANGE_FROM_EMAIL: {
      let newState = {
        ...state,
        ...state.currentMessage,
        ...state.currentMessage.sender
      };
      newState.currentMessage.sender.email = action.newEmailText;
      return newState;
    }
    default:
      return state;
  }
};

export let changeSenderNameAC = newNameText => {
  return {
    type: CHANGE_FROM_NAME,
    newNameText
  };
};

export let changeSenderEmalAC = newEmailText => {
  return {
    type: CHANGE_FROM_NAME,
    newEmailText
  };
};

export default currentMessage;
