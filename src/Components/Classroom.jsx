import React from 'react'

import Header from './Header'

const Classroom = ({  setScene, setDream }) => {
  const handleClick = (string) => {
    setScene('dream')
    setDream(string)
  } 
  return (
    <>
      <Header setScene={setScene}/>
      <div className="scene">
      <button onClick={() => handleClick('tom')}>Tom</button>
      <button onClick={() => handleClick('test')}>Test</button>
      <button onClick={() => handleClick('megan')}>Megan</button>
      <button onClick={() => handleClick('ymmij')}>Ymmij</button>
      </div>
    </>
  )
}

export default Classroom
