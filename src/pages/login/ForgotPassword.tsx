import { useState } from 'react';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import sendResetLink from './sendResetLink'; // Import your sendResetLink function

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log('Submitting form with email:', email);
  
    try {
      const success = await sendResetLink({ email });
  
      console.log('Reset link sent:', success);
  
      if (success) {
        alert('Password reset link sent to your email.'); // Display success message
        router.push('/pages/auth/verify-email-v1');
      } else {
        alert('Email not found. Please recheck your email.'); // Display error message
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      alert('An error occurred. Please try again.'); // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">SEND RESET LINK</button>
    </form>
  );
};

export default ForgotPassword;
