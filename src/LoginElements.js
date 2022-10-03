import React from 'react';

export default function LoginElements({ className }) {
  return (
    <div className={className}>
      <input className="inputF" placeholder="Username" />
      <input className="inputF" placeholder="Password" />
      <button className="forgotPass">Forgot Password?</button>
      <button className="buttonF googleB">
        Login with Google
      </button>
    </div>
  );
}
