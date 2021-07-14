import React from 'react'

const Menu = ({ setGame }) => {
  return (
    <>
      <button onClick={() => setGame('Tom')}>Tom</button>
      <button onClick={() => setGame('Test')}>Test</button>
      <button onClick={() => setGame('Megan')}>Megan</button>
    </>
  )
}

export default Menu
