export const isAuthorizationSelector = (state) => state.authorization.isAuthorizationRequired;
export const getErrorAuthorizationSelector = (state) => state.authorization.errorMessage;
export const isLoadingAuthorizationSelector = (state) => state.authorization.isLoading;
