import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  student: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/LOGIN_SUCCESS': {
        draft.student = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@user/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/LOGOFF': {
        draft.token = null;
        draft.signed = false;
        // history.push('/');
        break;
      }
      default:
    }
  });
}
