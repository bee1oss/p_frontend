import React from 'react';

function Form({ onSubmit, className = '', children }) {
  return (
    <div className={` ${className}`}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default Form;
