import React from 'react'

const SearchIcon = ({height, width, className}) => {
  return (
    <svg
        class="mr-2 inline-block"
        width={width ? width : "24"} height={height ? height : "24"} className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#8C979C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9992 21.0002L16.6992 16.7002"
          stroke="#8C979C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  )
}

export default SearchIcon
