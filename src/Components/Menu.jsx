import React from 'react'

const Menu = ({ setGame }) => {
  return (
    <>
      <button onClick={() => setGame('Tom')}>Tom</button>
      <button onClick={() => setGame('Test')}>Test</button>
      <button onClick={() => setGame('Fred')}>Fred</button>
    </>
  )
}

export default Menu
