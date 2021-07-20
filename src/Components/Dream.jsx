import React, { useState, useEffect } from 'react'

import Header from './Header'

const Dream = ({ dream, setScene }) => {
  const [removeFade, setRemoveFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRemoveFade(true)
    }, 2000)
  }, [])

  return (
    <div>
      <Header setScene={setScene}/>
      <div className="container">
        <div className="scene">
          <iframe src={`./${dream}.html`} title={dream} className='game-frame' frameBorder='0' allow='autoplay'></iframe>
        <div className={!removeFade && 'fadeIn'}></div>
        </div>
      </div>
    </div>
  )
}

export default Dream
