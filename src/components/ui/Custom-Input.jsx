import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className,
  icon 
}) => {
  return (
    <div className={`border relative border-[#A9A9A9] px-4 rounded-lg flex items-center justify-start gap-2 ${className}`}>
      {label && (
        <div className="px-2 absolute text-xs top-[-.5rem] bg-[#FFFDFA]">
          {label}
        </div>
      )}
      {icon && (
        <span>
          {icon}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="border-none w-full py-[0.88rem] outline-none bg-transparent"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;