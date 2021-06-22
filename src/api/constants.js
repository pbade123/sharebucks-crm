// Simple user auth constants
export const CLIENT_ID = 'XFGsXwSCfrinF4jKZOQbA1H4c9od1e4xYhZJRTdX';
export const CLIENT_SECRET =
  'T7UeHcdStxn5wN2565k96ruS51At5Iai3uet073LIUtm9PbwCAr7OK7uPbt1TX93fi7US4jxV6LVSRJLRlj8cXvNzcznrY0cXIyZHnKH4E0kFdRm1AktwYmvzcS5bgfZ';

// Auth
export const API_VERSION = '1.0.0';
export const USER_API = `${API_VERSION}/user/`;
export const AUTH_TOKEN_API = '/auth/token/';
export const USER_ME = `${USER_API}me/`;
export const LOGOUT = '/auth/revoke-token/';

export const NON_AUTHORIZATION_APIS = [USER_API, AUTH_TOKEN_API, LOGOUT];
