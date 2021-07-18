import React, { useState, useEffect } from 'react'

import Header from './Header'

const Classroom = ({  setScene, setDream }) => {
  const [speechOne, setSpeechOne] = useState('')
  const [speechTwo, setSpeechTwo] = useState('')
  const [speechOneVisible, setSpeechOneVisible] = useState('hidden')
  const [speechTwoVisible, setSpeechTwoVisible] = useState('hidden')

  const conversation = [
    'Have you heard of Batmna?',
    'Has anyone seen Poncho?',
    'Man that teacher sure loves drones',
    'That Lucas guy asks a lot of questions',
    'Handlebars rules!',
    '*Fred* Hey Bren...',
    '*Lucas* **insert impossible question here**',
    'I have no idea what\'s going on',
    'It\'s definitely not going to get any harder than this...'
  ]
  
  const charOneStyle = {
    left: '3.3rem',
    top: '9rem'
}
  const charTwoStyle = {
    left: '15rem',
    top: '9rem'
  }
  const charThreeStyle = {
    left: '3.3rem',
    top: '19rem'
  }
  const charFourStyle = {
    left: '15rem',
    top: '19rem'
  }
  const speechOneStyle = {
    left: '6.8rem',
    top: '5rem',
    visibility: speechOneVisible
  }
  const speechTwoStyle = {
    left: '6.8rem',
    top: '15rem',
    visibility: speechTwoVisible
  }

  const handleClick = (string) => {
    setScene('dream')
    setDream(string)
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  useEffect(() => {
    setSpeechOne(conversation[getRandomInt(0, conversation.length)])
    setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
  }, [] )

  useEffect(() => {
    setTimeout(() => {
      setSpeechOneVisible('visible')
      setTimeout(() => {
        setSpeechOneVisible('hidden')
        setSpeechOne(conversation[getRandomInt(0, conversation.length)])
      }, 3000)
    }, getRandomInt(3000, 10000))
  }, [speechOne])

  useEffect(() => {
    setTimeout(() => {
      setSpeechTwoVisible('visible')
      setTimeout(() => {
        setSpeechTwoVisible('hidden')
        setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
      }, 3000)
    }, getRandomInt(3000, 10000))
  }, [speechTwo])

  return (
    <>
    <div className="container">
      <Header setScene={setScene}/>
    </div>
    <div className="container">
      <span className='heading-small'>It's an afternoon lecture at Dev Academy and the students are starting to fall aleep. Click on the student who's dream you want to see...</span>
    </div>
    <div className="container">
      <div className="classroom">
        <div className="speech" style={speechOneStyle}>{speechOne}</div>
        <div className="speech" style={speechTwoStyle}>{speechTwo}</div>
        <div className="click-box" style={charOneStyle} onClick={() => handleClick('tom')}></div>
        <div className="click-box" style={charTwoStyle} onClick={() => handleClick('test')}></div>
        <div className="click-box" style={charThreeStyle} onClick={() => handleClick('megan')}></div>
        <div className="click-box" style={charFourStyle} onClick={() => handleClick('ymmij')}></div>
        <img src="/images/classroom_01.png" alt="a classrom" />
      </div>
    </div>
    </>
  )
}

export default Classroom
