import React from 'react'

const Landing = ({ setScene }) => {
  return (
    <>
      <div className="cloud">
        <h1>EDA</h1>
        <h4 onClick={() =>setScene('classroom')}>Everyone Dreams Always...</h4>
      </div>
    </>
  )
}

export default Landing
