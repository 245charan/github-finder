const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
