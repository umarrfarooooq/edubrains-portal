import React from 'react'

const MinusIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5" stroke="#696969" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default MinusIcon
