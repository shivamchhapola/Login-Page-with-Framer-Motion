import React from 'react';

export default function LoginElements({ className }) {
  return (
    <div className={className}>
      <input className="InputField" placeholder="Email" />
      <input className="InputField" placeholder="Name" />
      <input className="InputField" placeholder="Password" />
      <input className="InputField" placeholder="Confirm Password" />
    </div>
  );
}
