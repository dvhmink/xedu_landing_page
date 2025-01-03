import { InfoPage } from '../type';

export const GET_PAGES = 'GET_PAGES';
export const SET_PAGES = 'SET_PAGES';

export const getPages = () => ({
  type: GET_PAGES
});

export const setPages = (pages: InfoPage[]) => ({
  type: SET_PAGES,
  payload: pages
});

const initialState: { pages: InfoPage[] } = {
  pages: []
};

export default (state = initialState, action: { type: string; payload: InfoPage[] }) => {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.payload
      };
    default:
      return state;
  }
};
