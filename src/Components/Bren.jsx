import React, { useState, useEffect } from 'react'

const Bren = ({ startDream }) => {

  const [visible, setVisible] = useState('visible')
  const [speech, setSpeech] = useState('')

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
    'Okie-Dokie where did we get to yesterday',
    'I can type...',
    'I\'ve got so many tabs open',
    'I talk really fast',
    'Got to take my son to netball on Saturday',
    'Yeh man I\'ll just be a second',
    'Righty-ho',
    'This is a bit of a rabbit-hole',
    'This afternoon we are talking about testing!',
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

  useEffect(() => {
    setSpeech(brenQuotes[0])
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setVisible('visible')
      setTimeout(() => {
        setVisible('hidden')
        setSpeech(brenQuotes[getRandomInt(0, brenQuotes.length)])
      }, 4000)
    }, getRandomInt(3000, 9000))
  }, [speech])

  return (
    <>
      <div style={brenPos}></div>
      <div className='bubble mini left' style={brenSpeech}>{speech}</div>
      <div className={startDream ? 'fadeOut' : undefined}></div>
    </>
  )
}

export default Bren
