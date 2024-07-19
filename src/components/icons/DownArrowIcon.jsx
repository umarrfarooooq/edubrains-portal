import React from 'react'

const DownArrowIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 25 24" fill="none">
        <path d="M6.5 9L12.5 15L18.5 9" stroke="#696969" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default DownArrowIcon
