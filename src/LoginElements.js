import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginElements({ className }) {
  return (
    <div className={className}>
      <input className="inputF" placeholder="Username" />
      <input className="inputF" placeholder="Password" />
      <button className="forgotPass">Forgot Password?</button>
      <button className="buttonF googleB">
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
