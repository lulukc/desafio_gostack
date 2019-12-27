export function studentsRequest(data) {
  return {
    type: '@students/STUDENTS_REQUEST',
    payload: { data },
  };
}
