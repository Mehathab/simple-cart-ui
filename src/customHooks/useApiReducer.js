import { useReducer } from "react";

const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const REJECTED = "REJECTED";
const RESET = "RESET";
const initialState = {
  isPending: false,
  isSuccess: false,
  isError: false,
  successData: null,
  errorData: null,
};
const apiReducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case PENDING:
      return { ...initialState, isPending: true };
    case SUCCESS:
      return {
        ...state,
        isPending: false,
        isSuccess: true,
        successData: payload,
      };
    case REJECTED:
      return { ...state, isPending: false, isError: true, errorData: payload };
    case RESET:
      return { ...initialState };

    default:
      return state;
  }
};

const useApiReducer = (promise) => {
  const [apiState, dispatch] = useReducer(apiReducer, initialState);
  const dispatchAction = (type) => (payload) => dispatch({ type, payload });
  const restState = dispatchAction(RESET);

  const apiCall = (...params) => {
    dispatchAction(PENDING)();
    promise(...params)
      .then((response) => dispatchAction(SUCCESS)(response?.data))
      .catch((error) => dispatchAction(REJECTED)(error));
  };
  return [apiState, apiCall, restState];
};
export default useApiReducer;
