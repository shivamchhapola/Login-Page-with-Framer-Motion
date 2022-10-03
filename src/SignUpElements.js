import React from 'react';

export default function LoginElements({ className }) {
  return (
    <div className={className}>
      <input className="inputF" placeholder="Email" />
      <input className="inputF" placeholder="Name" />
      <input className="inputF" placeholder="Password" />
      <input className="inputF" placeholder="Confirm Password" />
    </div>
  );
}
