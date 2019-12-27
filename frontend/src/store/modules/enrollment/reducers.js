import produce from 'immer';

const INITIAL_STATE = {
  enrollmentList: null,
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/ENROLLMENT_REQUEST': {
        draft.enrollmentList = action.payload.data;
        break;
      }
      default:
    }
  });
}
