import React from 'react';

export default function UserButton({ text, onClick, disabled }) {
  return (
    <button className='userButton' onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
