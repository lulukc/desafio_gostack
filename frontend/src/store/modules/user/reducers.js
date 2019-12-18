import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@auth/LOGOFF': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
