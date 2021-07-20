import React from 'react'

const Start = ({ handleStart }) => {
  
  return (
    <>
      <div style={{width: '100vw', height: '100vh'}} onClick={handleStart}>
        <div className="landing-container">
          <p className='landing-start clickable'>Click here to begin</p>
        </div>
      </div>
    </>
  )
}

export default Start
