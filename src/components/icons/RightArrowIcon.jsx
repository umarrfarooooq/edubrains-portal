import React from 'react'

const RightArrowIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 16 16" fill="none">
        <path d="M6 12L10 8L6 4" stroke="#333333" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default RightArrowIcon
