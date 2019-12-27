import produce from 'immer';

const INITIAL_STATE = {
  studentsList: null,
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@students/STUDENTS_REQUEST': {
        draft.studentsList = action.payload.data;
        break;
      }
      default:
    }
  });
}
