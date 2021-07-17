import React from 'react'
import Header from './Header'

const Dream = ({ dream, setScene }) => {
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
