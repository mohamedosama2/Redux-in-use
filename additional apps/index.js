const redux = require("redux");
const reduxLogger = require("redux-logger");

const logger=reduxLogger.logger
const compineReducers=redux.combineReducers

const applyMiddleware=redux.applyMiddleware

const createStore = redux.createStore;

const CAKE = "CAKE";

function cakeAction() {
  return {
    type: CAKE,
  };
}
const cakeState = {
  cakeNumber: 10,
};

const cartReducer = (state = cakeState, action) => {
  switch (action.type) {
    case CAKE:
      return { ...state, cakeNumber: state.cakeNumber - 1 };
    default:
      return state;
  }
};

const compine=compineReducers({
    cake:cartReducer
})

const store = createStore(compine,applyMiddleware(logger));
console.log(store.getState());
const unsubscripe = store.subscribe(() => console.log(store.getState()));
store.dispatch(cakeAction());
store.dispatch(cakeAction());
store.dispatch(cakeAction());
store.dispatch(cakeAction());
unsubscripe();
