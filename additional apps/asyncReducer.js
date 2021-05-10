const axios = require("axios");
const redux = require("redux");
const reduxThunk = require("redux-thunk").default;

const applyMiddleware = redux.applyMiddleware;
const ICECREME_REQUEST = "ICECREME_REQUEST";
const ICECREME_SUCCESS = "ICECREME_SUCCESS";
const ICECREME_FAILURE = "ICECREME_FAILURE";

const createStore = redux.createStore;

const request = () => {
  return {
    type: ICECREME_REQUEST,
  };
};

const success = (users) => {
  return {
    type: ICECREME_SUCCESS,
    users: users,
  };
};

const failure = (error) => {
  return {
    type: ICECREME_FAILURE,
    payload: error,
  };
};

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ICECREME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ICECREME_SUCCESS:
      console.log("here");
      return {
        ...state,
        users: action.users,
        loading: false,
        error: "",
      };
    case ICECREME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch)  {
    dispatch(request());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(success(users));
      })
      .catch((err) => {
        dispatch(failure(err.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(reduxThunk));
// console.log(store.getState());
const unsubscripe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
unsubscripe();

console.log(store.getState());
