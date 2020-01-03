import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  question: {},
};

export default function question(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@question/QUESTION_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@question/QUESTION_SUCCESS': {
        draft.question = action.payload.question;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
