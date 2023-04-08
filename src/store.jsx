import { configureStore } from "@reduxjs/toolkit";
const initialState = {
    color: "#EA9950"
  };
  
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'ENABLE':
        return {
          ...state,
            color: "#EA9950" 

        };
      case 'DISABLE':
        return {
          ...state,
          color: "#9A9A9A" 
        };
      default:
        return state;
    }
  }
  
  const store = configureStore({
    reducer: {
      counter: counterReducer
    }
  });
  
  export default store;
  