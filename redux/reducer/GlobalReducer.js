import ActionType from "./GlobalActionType";
const initState = {
  totalOrder: 0
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.ADD_ORDER:
      return {
        ...initState,
        totalOrder: state.totalOrder + 1
      };
    case ActionType.MINUS_ORDER:
      return {
        ...initState,
        totalOrder: state.totalOrder + -1
      };
    default:
      return state;
  }
};

export default rootReducer;
