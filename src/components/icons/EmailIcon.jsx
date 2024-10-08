import React from 'react'

const EmailIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="#151515" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 20 16" fill="none">
        <path d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H3C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13V3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 3L10 9L19 3" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default EmailIcon
