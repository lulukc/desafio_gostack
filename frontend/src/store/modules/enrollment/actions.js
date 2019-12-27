export function enrollmentRequest(data) {
  return {
    type: '@enrollment/ENROLLMENT_REQUEST',
    payload: { data },
  };
}
