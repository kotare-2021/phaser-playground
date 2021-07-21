import React, { useState } from 'react'

const Bren = (props) => {

  const [visible, setVisible] = useState('hidden')
  const [int, setInt] = useState(0)

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

  const brenQuotes = [
    'I can type...',
    'I\'ve got so many tabs open',
    'I talk really fast',
    'Got to take my son to netball on Saturday',
    'Yeh man I\'ll just be a second',
    'Righty-ho',
    'This is a bit of a rabbit-hole',
    'This afternoon we are talking about testing!',
    'Okie-Dokie where did we get to yesterday',
    'I\'ll just be a minute Fred',
    'Batmna',
    'I love inline styling...',
    'Use the power of CSS!'
  ]

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const mouseLeaveHandler = () => {
    setVisible('hidden')
    setInt(getRandomInt(0, brenQuotes.length))
  }

  return (
    <>
      <div style={brenPos} className='clickable' onMouseEnter={() => setVisible('visible')} onMouseLeave={mouseLeaveHandler}></div>
      <div className='bubble mini left' style={brenSpeech}>{brenQuotes[int]}</div>
    </>
  )
}

export default Bren
