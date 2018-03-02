const defaultProducts = [
  {
    id: 0,
    name: "Shampoo",
    description: "Shampoo: it's like soap, for your hair",
    cost: 5.99
  },
  {
    id: 1,
    name: "Neuhaus Chocolate",
    description: "For when you really need the best chocolate",
    cost: 15.75
  },
  {
    id: 2,
    name: "Blanket",
    description: "A warm blanket; useful when you are cold",
    cost: 7.99
  }
];

const products = (state = defaultProducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          cost: action.cost,
          description: action.description
        }
      ];
    default:
      return state;
  }
};

export default products;
