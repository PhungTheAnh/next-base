import { Action, action } from 'easy-peasy';

export interface Auth {
  id: string | null;
  name: string;
  email: string;
  avatar: string;
  token: string;
}

export interface AuthModel {
  auth: Auth;
  setAuth: Action<AuthModel, Auth>;
}

const authState: AuthModel = {
  // state
  auth: {
    id: null,
    name: '',
    email: '',
    avatar: '',
    token: '',
  },

  // action
  setAuth: action((state, payload) => {
    state.auth = payload;
  }),
};

export default authState;
