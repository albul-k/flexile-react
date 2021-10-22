import {
  createContext,
  Dispatch,
  useReducer
} from "react";
import App from "../App";


interface IState {
  errorList: any[],
}

interface IActions {
  type: string;
  value?: any;
}

interface IStateProps {
  state: IState,
  dispatch: Dispatch<IActions>
}

const initState: IState = {
  errorList: [],
};

const reducer = (state = initState, action: IActions) => {
  switch (action.type) {
    case 'setError':
      const error = state.errorList;
      if (action.value) {
        error.push(action.value);
      }
      return {
        ...state,
        errorList: error
      }
    case 'clearError':
      return {
        ...state,
        errorList: []
      }
    default:
      return state
  }
};


export const StateContext = createContext({} as IStateProps);

export const StateProvider = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <App />
    </StateContext.Provider>
  );
};