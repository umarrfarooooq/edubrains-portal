import React from 'react';
import PropTypes from 'prop-types';

const InputError = ({ errorMessage, className }) => {
  if (!errorMessage) return null;
  
  let message = 'An error occurred';

  if (typeof errorMessage === 'string') {
    message = errorMessage;
  } else if (typeof errorMessage === 'object') {
    if (errorMessage.message) {
      message = errorMessage.message;
    } else if (errorMessage.error && errorMessage.error.message) {
      message = errorMessage.error.message;
    }
  }
  return (
    <div className={`mt-1 ${className}`}>
      <div className='flex items-center gap-1'>
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M6.9987 5.00016H7.00536M6.33203 7.00016H6.9987V9.66683H7.66536" stroke="#D94444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 1C11.8 1 13 2.2 13 7C13 11.8 11.8 13 7 13C2.2 13 1 11.8 1 7C1 2.2 2.2 1 7 1Z" stroke="#D94444" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className='text-[0.6875rem] text-[#D94444] font-medium' role="alert">
          {message}
        </div>
      </div>
    </div>
  );
};

InputError.propTypes = {
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string
    })
  ]),
  className: PropTypes.string,
};

InputError.defaultProps = {
  errorMessage: '',
  className: '',
};

export default InputError;