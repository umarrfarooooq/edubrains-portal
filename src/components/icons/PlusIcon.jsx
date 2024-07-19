import React from 'react'

const PlusIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 12 12" fill="none">
        <path d="M10.2426 5.99996H1.75736M6 1.75732V10.2426" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default PlusIcon
