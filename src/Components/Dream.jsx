import React from 'react'
import Header from './Header'

const Dream = ({ dream, setScene }) => {
  return (
    <>
      <Header setScene={setScene}/>
      <div className="scene">
        <iframe src={`./${dream}.html`} title={dream}></iframe>
      </div>
    </>
  )
}

export default Dream
