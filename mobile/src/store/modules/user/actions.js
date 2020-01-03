export function loginRequest(id) {
  return {
    type: '@user/LOGIN_REQUEST',
    payload: { id },
  };
}

export function loginSuccess(user) {
  return {
    type: '@user/LOGIN_SUCCESS',
    payload: { user },
  };
}

export function loginFailure() {
  return {
    type: '@user/LOGIN_FAILUR',
  };
}
