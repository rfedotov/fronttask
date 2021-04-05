const initialState = {
  thumbs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_ALL": {
      const content = action.payload;
      return {
        ...state,
        thumbs: content
      };
    }
    default:
      return state;
  }
}
