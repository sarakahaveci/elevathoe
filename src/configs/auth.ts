export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signin',
  registerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signup',
  forgotEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/forgotPassword',
  updateEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/updatePassword',
  getcustomerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/getcustomer',
  addcustomerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/addcustomer',
  getcallsEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/call/getcalls',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
