import Data from "../constants/shoppingCart";

const rootReducer = (state = Data, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

window.Data = Data;

export { rootReducer };
