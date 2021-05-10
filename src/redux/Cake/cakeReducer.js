import { BUY_CAKE } from "./cakeTypess";

const initialState = {
  cakes: 10,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        cakes: state.cakes - 1,
      };
    default:
      return state;
  }
};
