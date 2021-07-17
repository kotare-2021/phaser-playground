import React from 'react'

import Header from './Header'

const Classroom = ({  setScene, setDream }) => {
  const handleClick = (string) => {
    setScene('dream')
    setDream(string)
  } 
  return (
    <>
    <div className="container">
      <Header setScene={setScene}/>
    </div>
    <div className="container">
      <div className="classroom">
        <img src="/images/classroom_01.png" alt="a classrom" />
      <button onClick={() => handleClick('tom')}>Tom</button>
      <button onClick={() => handleClick('test')}>Test</button>
      <button onClick={() => handleClick('megan')}>Megan</button>
      <button onClick={() => handleClick('ymmij')}>Ymmij</button>
      </div>
    </div>
    </>
  )
}

export default Classroom
