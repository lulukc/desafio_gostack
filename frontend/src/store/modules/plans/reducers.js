import produce from 'immer';

const INITIAL_STATE = {
  plansList: null,
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plans/PLANS_REQUEST': {
        draft.plansList = action.payload.data;
        break;
      }
      default:
    }
  });
}
