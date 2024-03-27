export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signin',
  registerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signup',
  forgotEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/forgotPassword',
  updateEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/updatePassword',
  addcustomerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/addCustomer',
  getcustomersEndPoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/getCustomers',
  getcallsEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/call/getCalls',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
