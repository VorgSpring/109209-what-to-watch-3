import {
  getAuthorizationStatusSelector,
  getErrorAuthorizationSelector,
  getLoadingStatusAuthorizationSelector
} from './authorization';
import {state} from '../../mocks/state';

describe(`authorization selector`, () => {
  it(`should get authorization status`, () => {
    expect(getAuthorizationStatusSelector(state)).toBe(true);
  });
  it(`should get error authorization`, () => {
    expect(getErrorAuthorizationSelector(state)).toBe(null);
  });
  it(`should get loading authorization status`, () => {
    expect(getLoadingStatusAuthorizationSelector(state)).toBe(false);
  });
});
