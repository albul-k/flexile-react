import { createContext, useContext, useReducer } from "react";


const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const AuthContext = createContext({});
const initialState = {
	user: null
};

const authReducer = (state: any, { type, payload }: any) => {
	switch (type) {
		case LOGIN: {
			return {
				...state,
				user: payload
			}
		}
		case LOGOUT: {
			return {
				...state,
				user: null
			}
		}
		default: {
			return state
		}
	}
}

type Maybe<T> = T | null;
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};
type AuthPayload = {
  // __typename?: 'AuthPayload';
  /** Залогинились ли */
  loggedin?: Maybe<Scalars['Boolean']>;
  /** Ошибка при авторизации */
  error?: Maybe<Scalars['String']>;
  /** Идентификатор сессии */
  uuid?: Maybe<Scalars['String']>;
};


export const AuthProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (userData: AuthPayload) => {
		// window.sessionStorage.setItem('ssid', JSON.stringify(userData.token))
		console.log(userData);
		// if (userData.loggedin) {

		// }
		dispatch({
			type: LOGIN,
			payload: userData
		})
	}

	const logout = () => {
		// Удаляем токен из локального хранилища
		// window.sessionStorage.removeItem('ssid');
		dispatch({ type: LOGOUT })
	}

	return (
		<AuthContext.Provider value={{ user: state.user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => useContext(AuthContext)
