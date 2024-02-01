export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/rest/signin',
  registerEndpoint: '/rest/signup',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}