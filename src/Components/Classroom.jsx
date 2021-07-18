import React, { useState, useEffect } from 'react'

import Header from './Header'

const Classroom = ({  setScene, setDream }) => {
  const [speechOne, setSpeechOne] = useState('')
  const [speechTwo, setSpeechTwo] = useState('')
  const [speechOneVisible, setSpeechOneVisible] = useState('hidden')
  const [speechTwoVisible, setSpeechTwoVisible] = useState('hidden')
  const [startDream, setStartDream] = useState(false)
  const [fadeOut, setFadeOut] = useState(null)
  const [fadeIn, setFadeIn] = useState({
    visibility: 'hidden'
  })

  const conversation = [
    'Have you heard of Batmna?',
    'Has anyone seen Poncho?',
    'Man that teacher sure loves drones',
    'That Lucas guy asks a lot of questions',
    'Handlebars is amazing!',
    '*Fred* Hey Bren...',
    '*Lucas* **insert impossible question here**',
    'I have no idea what\'s going on',
    'It\'s definitely not going to get any harder than this...',
    'The great thing about blockchain is',
    'I should really start my Trello Board',
    'I wonder if a boy will be born who can swim faster than a shark',
    'Pretty sure CSS doesn\'t work',
    'Why doesn\'t Cleo love me?',
    'I wonder how big the baby is this week',
    'Wait what?!',
    '2 Repo\'s is the way to go'
  ]
  
  //variables for div positioning
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
    visibility: speechOneVisible,
    position: 'absolute'
  }
  const speechTwoStyle = {
    left: '6.8rem',
    top: '15rem',
    visibility: speechTwoVisible,
    position: 'absolute'
  }

  //On click select dream and render dream component
  const handleClick = (string) => {
    setStartDream(true)
    setFadeOut({
      visibility: 'hidden',
      opacity: 0,
      transition: 'visibility 0s 2s, opacity 2s linear'
    })
    setTimeout(() => {
      setScene('dream')
      setDream(string)
    }, 2000)
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  //On render set speech boxes to random conversation
  useEffect(() => {
    setFadeIn({// fade in not currently working
      visibility: 'visible',
      opacity: 1,
      transition: 'opacity 2s linear'
    })
    setTimeout(() => {
      setSpeechOne(conversation[getRandomInt(0, conversation.length)])
      setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
    }, 2000)
  }, [] )

  //Logic for repeating random speech boxes
  useEffect(() => {
    if (!startDream) {// normal condition
      setTimeout(() => {
         setSpeechOneVisible('visible')
         setTimeout(() => {
           setSpeechOneVisible('hidden')
           setSpeechOne(conversation[getRandomInt(0, conversation.length)])
         }, 3000)
       }, getRandomInt(3000, 12000)) 
    } else {// condition when student clicked
      setSpeechOneVisible('hidden')
      setSpeechTwoVisible('hidden')
    }
  }, [speechOne])

  useEffect(() => {
    if (!startDream) {// normal condition
      setTimeout(() => {
        setSpeechTwoVisible('visible')
        setTimeout(() => {
          setSpeechTwoVisible('hidden')
          setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
        }, 3000)
      }, getRandomInt(3000, 12000))
    } else {// condition when student clicked
      setSpeechOneVisible('hidden')
      setSpeechTwoVisible('hidden')
    }
  }, [speechTwo])

  return (
    <div style={fadeIn}>
      <div className="container">
        <Header setScene={setScene}/>
      </div>
      <div className="container">
        <span className='heading-small'>It's an afternoon lecture at Dev Academy and one of the students is starting to fall aleep. Click on the student who's dream you want to see...</span>
      </div>
      <div className="container">
        <div className="classroom" style={fadeOut}>
          <div style={speechOneStyle}>
            <div className="bubble mini left">{speechOne}</div>
          </div>
          <div style={speechTwoStyle}>
            <div className="bubble mini right">{speechTwo}</div>
          </div>
          <div className="click-box" style={charOneStyle} onClick={() => handleClick('tom')}></div>
          <div className="click-box" style={charTwoStyle} onClick={() => handleClick('test')}></div>
          <div className="click-box" style={charThreeStyle} onClick={() => handleClick('megan')}></div>
          <div className="click-box" style={charFourStyle} onClick={() => handleClick('ymmij')}></div>
          <img src="/images/classroom_01.png" alt="a classrom" />
        </div>

      </div>
    </div>
  )
}

export default Classroom
