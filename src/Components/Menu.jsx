import React from 'react'

const Menu = ({ setGame }) => {
  return (
    <div className='navbar'>
      <button className='navLink' onClick={() => setGame('Tom')}>Tom</button>
      <button className='navLink' onClick={() => setGame('Test')}>Test</button>
      <button className='navLink' onClick={() => setGame('Megan')}>Megan</button>
      <button className='navLink' onClick={() => setGame('Ymmij')}>Ymmij</button>
    </div>
  )
}

export default Menu
