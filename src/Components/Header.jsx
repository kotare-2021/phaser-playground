import React from 'react'

const Header = ({setGame}) => {
  return (
    <div className='header' onClick={() => setGame('Menu')}>
      <h1 className='firstHeader'>Phaser</h1>
      <h1 className='secondHeader'>Playground</h1>
    </div>
  )
}

export default Header
