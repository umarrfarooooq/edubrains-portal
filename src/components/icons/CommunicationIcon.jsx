import React from 'react'

const CommunicationIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13.999 15V17C13.999 17.2652 13.8937 17.5196 13.7061 17.7071C13.5186 17.8946 13.2642 18 12.999 18H5.99902L2.99902 21V11C2.99902 10.7348 3.10438 10.4804 3.29192 10.2929C3.47945 10.1054 3.73381 10 3.99902 10H5.99902M20.999 14L17.999 11H10.999C10.7338 11 10.4795 10.8946 10.2919 10.7071C10.1044 10.5196 9.99902 10.2652 9.99902 10V4C9.99902 3.73478 10.1044 3.48043 10.2919 3.29289C10.4795 3.10536 10.7338 3 10.999 3H19.999C20.2642 3 20.5186 3.10536 20.7061 3.29289C20.8937 3.48043 20.999 3.73478 20.999 4V14Z" strokeWidth="1.88235" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default CommunicationIcon
