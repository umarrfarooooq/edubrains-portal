import React from 'react'

const BackIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 24 24" fill="none">
        <path d="M6 12C6 12.3842 6.14689 12.7119 6.45198 13.0056L15.2655 21.6271C15.5028 21.8757 15.8192 22 16.1808 22C16.9153 22 17.4915 21.435 17.4915 20.6893C17.4915 20.3277 17.3446 20 17.096 19.7514L9.15254 12L17.096 4.24859C17.3446 3.9887 17.4915 3.66102 17.4915 3.29944C17.4915 2.56497 16.9153 2 16.1808 2C15.8192 2 15.5028 2.12429 15.2655 2.37288L6.45198 10.9943C6.14689 11.2881 6.0113 11.6158 6 12Z" fill="#333333"/>
    </svg>
  )
}

export default BackIcon
