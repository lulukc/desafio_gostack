export function questionRequest(id) {
  return {
    type: '@question/QUESTION_REQUEST',
    payload: { id },
  };
}

export function questionSuccess(question) {
  return {
    type: '@question/QUESTION_SUCCESS',
    payload: { question },
  };
}
