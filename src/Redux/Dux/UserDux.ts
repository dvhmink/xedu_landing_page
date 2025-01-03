import { User } from '../type';

export const SET_USER = 'SET_USER';
export const LOG_OUT = 'LOG_OUT';
export const GET_USER = 'GET_USER';
export const LOG_IN = 'LOG_IN';
export const SET_TOKEN = 'SET_TOKEN';
const RESET_USER = 'RESET_USER';

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user: UserState) => ({
  type: SET_USER,
  user
});

export const login = ({
  username = '',
  password = ''
}: {
  username: string;
  password: string;
}) => ({
  type: LOG_IN,
  username,
  password
});

export const logout = () => ({
  type: LOG_OUT
});

export const setToken = (token: boolean | string | null) => ({
  type: SET_TOKEN,
  token
});

export const resetUser = () => ({
  type: RESET_USER
});

interface UserState extends User {
  errorMess?: string;
}

const initState: UserState | null = {
  name: '',
  username: '',
  dateOfBirth: '',
  email: '',
  role: undefined,
  phoneNumber: '',
  token: false,
  errorMess: ''
};

export default (
  state: User = initState,
  action: { type: string; user: User; token: string }
): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.user };
    case RESET_USER:
      return initState;
    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
