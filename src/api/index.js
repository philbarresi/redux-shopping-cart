// Emulate HTTP call
const doWork = (milliseconds = 1500) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
};

export const fetchProductList = async () => {
  await doWork(1500);
  return [
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
};
