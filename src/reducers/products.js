const defaultState = {
  loaded: false,
  listing: []
};

const products = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        listing: [
          ...state.listing,
          {
            id: action.id,
            name: action.name,
            cost: action.cost,
            description: action.description
          }
        ]
      };
    default:
      return state;
  }
};

export default products;
