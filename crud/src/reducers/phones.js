const phones = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { ...action.payload, id: action.id }];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);

    case "UPDATE_ITEM":
      return state.map(item => {
        if (item.id === action.id) {
          return (item = { ...action.payload, id: action.id });
        }
        return item;
      });

    default:
      return state;
  }
};

export default phones;
