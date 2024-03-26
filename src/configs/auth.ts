export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signin',
  registerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/signup',
  forgotEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/forgotPassword',
  updateEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/updatePassword',
  getcustomerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/getCustomer',
  addcustomerEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/addCustomer',
  getAllCustomersEndPoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/getCustomers',
  getcallsEndpoint: 'https://ciargyanclokbcragarw.supabase.co/functions/v1/rest/call/getCalls',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
