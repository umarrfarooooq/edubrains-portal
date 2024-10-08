import React from 'react'

const LibraryIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 19C10.6318 18.21 9.07983 17.7942 7.5 17.7942C5.92017 17.7942 4.36817 18.21 3 19V5.99996C4.36817 5.21005 5.92017 4.79419 7.5 4.79419C9.07983 4.79419 10.6318 5.21005 12 5.99996M12 19C13.3682 18.21 14.9202 17.7942 16.5 17.7942C18.0798 17.7942 19.6318 18.21 21 19V5.99996C19.6318 5.21005 18.0798 4.79419 16.5 4.79419C14.9202 4.79419 13.3682 5.21005 12 5.99996M12 19V5.99996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default LibraryIcon
