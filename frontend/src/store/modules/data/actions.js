export function dataRequest(token) {
  return {
    type: '@data/DATA_REQUEST',
    payload: { token },
  };
}

export function dataSuccess(student, plan, enrollment) {
  return {
    type: '@data/DATA_SUCCESS',
    payload: { student, plan, enrollment },
  };
}

export function reloadDataRequest() {
  return {
    type: '@data/RELOAD_DATA_REQUEST',
    payload: {},
  };
}

export function reloadDataSuccess(student, plan, enrollment) {
  return {
    type: '@data/RELOAD_DATA_SUCCESS',
    payload: { student, plan, enrollment },
  };
}
