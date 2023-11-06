import { IOrganization, PayloadSetOrg, TActions } from '../types';

const initialState: IOrganization = {
  name: '',
  repos: [],
  error: false,
  page: 1,
};

export const SET_ORG = 'SET_ORG';
export const FETCH_ORG_REPOS_BY_NAME = 'FETCH_ORG_REPOS_BY_NAME';
export const PAGINATE_TABLE = 'PAGINATE_TABLE';
export const SET_ERROR = 'SET_ERROR';

export default function orgReducer(state = initialState, actions: TActions) {
  switch (actions.type) {
    case SET_ORG:
      return { ...state, ...actions.payload };
    default:
      return state;
  }
}

export const setOrg = (payload: PayloadSetOrg) => ({
  type: SET_ORG,
  payload,
});

export const fetchOrg = (name: string) => ({
  type: FETCH_ORG_REPOS_BY_NAME,
  payload: {
    name,
  },
});

export const paginateOrg = (name: string, page: number) => ({
  type: PAGINATE_TABLE,
  payload: {
    name,
    page,
  },
});
