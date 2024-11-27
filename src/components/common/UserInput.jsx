import React from 'react';

export default function UserInput({
  type,
  placeholder,
  value,
  name,
  onChange,
}) {
  return (
    <input
      className='userInput'
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
