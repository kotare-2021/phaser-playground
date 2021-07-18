import React, { useState, useEffect } from 'react'
import Header from './Header'

const Dream = ({ dream, setScene }) => {
  const [dreamStyle, setDreamStyle] = useState({
    visibility: 'hidden'
  })

  useEffect(() => {
    setDreamStyle({
      visibility: 'visible',
      opacity: 1,
      transition: 'opacity 2s linear'
    })
  }, [])
  return (
    <>
    <div className="container">
      <Header setScene={setScene}/>
    </div>
    <div className="container">
      <div className="scene">
        <iframe src={`./${dream}.html`} title={dream} className='game-frame' frameBorder='0'></iframe>
      </div>
    </div>
    </>
  )
}

export default Dream
