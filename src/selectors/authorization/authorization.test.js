import {
  isAuthorizationSelector,
  getErrorAuthorizationSelector,
  isLoadingAuthorizationSelector
} from './authorization';
import {state} from '../../mocks/state';

describe(`authorization selector`, () => {
  it(`should get isAuthorizationRequired`, () => {
    expect(isAuthorizationSelector(state)).toBe(true);
  });
  it(`should getErrorAuthorizationSelector`, () => {
    expect(getErrorAuthorizationSelector(state)).toBe(null);
  });
  it(`should get isLoadingAuthorizationSelector`, () => {
    expect(isLoadingAuthorizationSelector(state)).toBe(false);
  });
});
