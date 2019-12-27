export function plansRequest(data) {
  return {
    type: '@plans/PLANS_REQUEST',
    payload: { data },
  };
}
