import produce from 'immer';

const INITIAL_STATE = {
  enrollmentList: null,
  plansList: null,
  studentsList: null,
  loading: false,
};

export default function data(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@data/DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@data/DATA_SUCCESS': {
        const { student, plan, enrollment } = action.payload;
        draft.enrollmentList = enrollment;
        draft.plansList = plan;
        draft.studentsList = student;
        draft.loading = false;
        break;
      }
      case '@data/RELOAD_DATA_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@data/RELOAD_DATA_SUCCESS': {
        const { student, plan, enrollment } = action.payload;
        draft.enrollmentList = enrollment;
        draft.plansList = plan;
        draft.studentsList = student;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
