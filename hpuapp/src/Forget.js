import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div data-aos="flip-right">
    <div className="d-flex align-item-center justify-content-center w-100 mt-2">
      
      <form onSubmit={handleSubmit} style={{border:"2px solid black", boxShadow:"5px 6px 6px blue",padding:"65px", marginTop:"10px"}}>
        <h2 className='bg-dark p-2  text-light text-center'>Forgot Password</h2>
      <br/>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <br/>
        <button type="submit" className="btn" style={{backgroundColor:"blue", color:"white"}} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Reset Password'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;