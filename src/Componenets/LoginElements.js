import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import './../CSS/Elements.css';

export default function LoginElements({ className }) {
  return (
    <div className={className}>
      <input className="InputField" placeholder="Username" />
      <input className="InputField" placeholder="Password" />
      <button className="ForgotPass">Forgot Password?</button>
      <button className="BtnField GoogleBtn">
        <FcGoogle
          size="1.2rem"
          style={{
            marginRight: '0.15rem',
            verticalAlign: 'middle',
          }}
        />
        Login with Google
      </button>
    </div>
  );
}
