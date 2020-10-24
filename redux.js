const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 1
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return {
        ...state,
        value: state.value + 1
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

store.subscription(() => {
  console.log("changed");
});

store.dispatch({ type: "ADD_VALUE" });
