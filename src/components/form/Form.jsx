import React from 'react';

function Form({ onSubmit, className = '', children }) {
  return (
    <div className={`form-card ${className}`}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default Form;
