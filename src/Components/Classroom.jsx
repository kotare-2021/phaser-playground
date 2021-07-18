import React from 'react'

import Header from './Header'

const Classroom = ({  setScene, setDream }) => {
  const handleClick = (string) => {
    setScene('dream')
    setDream(string)
  }
  
  const charOneStyle = {
    left: '3.3rem',
    top: '9rem'
}
  const charTwoStyle = {
    left: '15rem',
    top: '9rem'
  }
  const charThreeStyle = {
    left: '3.3rem',
    top: '19rem'
  }
  const charFourStyle = {
    left: '15rem',
    top: '19rem'
  }
  return (
    <>
    <div className="container">
      <Header setScene={setScene}/>
    </div>
    <div className="container">
      <span className='heading-small'>It's the first day of Dev Academy and the new students are already starting to fall aleep. Click on the student who's dream you want to see...</span>
    </div>
    <div className="container">
      <div className="classroom">
        <div className="click-box" style={charOneStyle} onClick={() => handleClick('fred')}></div>
        <div className="click-box" style={charTwoStyle} onClick={() => handleClick('test')}></div>
        <div className="click-box" style={charThreeStyle} onClick={() => handleClick('megan')}></div>
        <div className="click-box" style={charFourStyle} onClick={() => handleClick('ymmij')}></div>
        <img src="/images/classroom_01.png" alt="a classrom" />
      </div>
    </div>
    </>
  )
}

export default Classroom
