import React, { useState } from 'react'

const Bren = (props) => {

  const [visible, setVisible] = useState('hidden')

  const brenPos = {
    position: 'absolute',
    top: '1rem',
    left: '13.5rem',
    height: '5rem',
    width: '3rem'
  }

  const brenSpeech = {
    position: 'absolute',
    top: '0.5rem',
    left: '17rem',
    visibility: visible
  }

  return (
    <>
      <div style={brenPos} className='clickable' onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('hidden')}></div>
      <div className='bubble mini left' style={brenSpeech}>Test</div>
    </>
  )
}

export default Bren
