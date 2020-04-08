export const getAuthorizationStatusSelector = (state) =>
  state.authorization.isAuthorizationRequired;

export const getErrorAuthorizationSelector = (state) =>
  state.authorization.errorMessage;

export const getLoadingStatusAuthorizationSelector = (state) =>
  state.authorization.isLoading;
