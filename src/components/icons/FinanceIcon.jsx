import React from 'react'

const FinanceIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 16 20" fill="none">
      <path d="M1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19L12 17L10 19L8 17L6 19L4 17L1 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 6H7.5C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5C6 7.89782 6.15804 8.27936 6.43934 8.56066C6.72064 8.84196 7.10218 9 7.5 9H8.5C8.89782 9 9.27936 9.15804 9.56066 9.43934C9.84196 9.72064 10 10.1022 10 10.5C10 10.8978 9.84196 11.2794 9.56066 11.5607C9.27936 11.842 8.89782 12 8.5 12H6M8 12V13.5M8 4.5V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default FinanceIcon
