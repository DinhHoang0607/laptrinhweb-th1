import React from 'react';
import './Input.css';

function Input(props) {
  return (
    <div className='input-container'>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Input;
