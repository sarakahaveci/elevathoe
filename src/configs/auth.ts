export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/hello-world/signin',
  registerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/hello-world/signup',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}