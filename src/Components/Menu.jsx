import React from 'react'

const Menu = ({ setGame }) => {
  return (
<<<<<<< HEAD
    <>
      <button onClick={() => setGame('Tom')}>Tom</button>
      <button onClick={() => setGame('Test')}>Test</button>
      <button onClick={() => setGame('Fred')}>Fred</button>
    </>
=======
    <div className='navbar'>
      <button className='navLink' onClick={() => setGame('Tom')}>Tom</button>
      <button className='navLink' onClick={() => setGame('Test')}>Test</button>
      <button className='navLink' onClick={() => setGame('Megan')}>Megan</button>
      <button className='navLink' onClick={() => setGame('Ymmij')}>Ymmij</button>
    </div>
>>>>>>> a2a52386b1e184c281d583f0de119885ae92f35e
  )
}

export default Menu
