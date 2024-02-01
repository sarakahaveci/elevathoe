export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/hello-world/signin',
  registerEndpoint: '/rest/signup',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}