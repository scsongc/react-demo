import { combineReducers } from "redux";

const username = (username = "", action) => {
    switch (action.type) {
      case "LOGIN": return action.username;
      case "LOGOUT": return "";
      default: return username;
    }
};

const testData = (testData = 100, action) => {
  return testData;
};

const menu = (menu = "", action) => {
  switch (action.type) {
    case "SELECTACCOUNT": return action.menu;
    case "SELECTHISTORY": return action.menu;
    case "SELECTCONTACT": return action.menu;
    default: return menu;
  }
};

export default combineReducers({username, testData, menu});