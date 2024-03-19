export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signin',
  registerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signup',
  // resetEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/reset-password',
  forgotEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/forgotPassword',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
