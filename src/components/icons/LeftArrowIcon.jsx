import React from 'react'

const LeftArrowIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11 7L6 12L11 17M17 7L12 12L17 17" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default LeftArrowIcon
