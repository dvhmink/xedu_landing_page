const SET_LOADING = 'SET_LOADING';

export const setLoading = (visible: boolean) => ({
  type: SET_LOADING,
  visible
});

const initState = {
  visible: false
};

export default (state = initState, action: { type: string; visible: boolean }) => {
  if (action.type === SET_LOADING) {
    return { ...state, visible: action.visible };
  } else {
    return state;
  }
};
