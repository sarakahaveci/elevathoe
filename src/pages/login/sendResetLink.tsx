import axios from 'axios';


const sendResetLink = async ({ email }: { email: string }) => {

  try {
    const api_url = `${process.env.BASE_URL}/forgotPassword`;
    const anonKey = process.env.ANON_KEY;

    const response = await axios.post(
      api_url,
      { email },
      {
        headers: {
          'apikey': anonKey,
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${anonKey}`,
        },
      }
    );

    if (response.status === 200) {
      return true; 
    }

    return false; 
  } catch (error) {
    console.error('Error sending reset link:', error);
    return false; 
  }
};
export default sendResetLink;