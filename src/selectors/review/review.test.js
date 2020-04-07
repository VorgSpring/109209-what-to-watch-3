import {
  getSendingStatusSelector,
  getErrorMessageSelector
} from './review';
import {state} from '../../mocks/state';

// TODO негативный сценарий
describe(`review selector`, () => {
  it(`should get sending status`, () => {
    expect(getSendingStatusSelector(state)).toBe(false);
  });

  it(`should get error message`, () => {
    expect(getErrorMessageSelector(state)).toBe(null);
  });
});
