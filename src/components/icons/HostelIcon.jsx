import React from 'react'

const HostelIcon = ({height, width, className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width={width ? width : "24"} height={height ? height : "24"} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M3 16H21M3 11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13C5.53043 13 6.03914 12.7893 6.41421 12.4142C6.78929 12.0391 7 11.5304 7 11C7 10.4696 6.78929 9.96086 6.41421 9.58579C6.03914 9.21071 5.53043 9 5 9C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11ZM10 13H21V11C21 10.2044 20.6839 9.44129 20.1213 8.87868C19.5587 8.31607 18.7956 8 18 8H10V13Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default HostelIcon
