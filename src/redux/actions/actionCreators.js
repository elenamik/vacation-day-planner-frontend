import { TEST } from './actionConstants';

export function test (modal_data) {
  return {
    type: TEST,
    modal_data
  };
}
