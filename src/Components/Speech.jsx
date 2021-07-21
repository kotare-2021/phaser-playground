import React, { useState, useEffect} from 'react'

// speech bubble content
const conversation = [
  'Have you heard of Batmna?',
  'Has anyone seen Poncho?',
  'Whats an elevator?',
  'Man that teacher loves drones',
  'That Lucas guy asks a lot of questions',
  'Handlebars is amazing!',
  '*Fred* Hey Bren...',
  '*Lucas* **insert impossible question here**',
  'I have no idea what\'s going on',
  'It\'s definitely not going to get any harder than this...',
  'The great thing about blockchain is',
  'I should really start my Trello Board...',
  'Will a boy be born who can swim faster than a shark?',
  'I hate CSS',
  'Why doesn\'t Cleo love me?',
  'I wonder how big the baby is this week',
  'Wait what?!',
  '2 Repo\'s is the way to go',
  'What am I going to say in my lightning talk?!'
]

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const Speech = () => {
  // set speech bubble content
  const [speechOne, setSpeechOne] = useState(conversation[getRandomInt(0, conversation.length)])
  const [speechTwo, setSpeechTwo] = useState(conversation[getRandomInt(0, conversation.length)])

  // set speech bubble visibility
  const [speechOneVisible, setSpeechOneVisible] = useState('hidden')
  const [speechTwoVisible, setSpeechTwoVisible] = useState('hidden')

  // set speech bubble stem direction
  const [speechDirectionOne, setSpeechDirectionOne] = useState(true)
  const [speechDirectionTwo, setSpeechDirectionTwo] = useState(true)

  //speech positioning variables
  const speechOneStyle = {
    left: '6.4rem',
    top: '7rem',
    visibility: speechOneVisible,
    position: 'absolute'
  }
  const speechTwoStyle = {
    left: '6.4rem',
    top: '17rem',
    visibility: speechTwoVisible,
    position: 'absolute'
  }

  useEffect(() => {
    let currentTimerOne
    if (speechOneVisible === 'visible') {
      currentTimerOne = setTimeout(() => {
        setSpeechOneVisible('hidden')
        setSpeechOne(conversation[getRandomInt(0, conversation.length)])
        setSpeechDirectionOne(!speechDirectionOne)
      }, 4000)
    } else {
      currentTimerOne = setTimeout(() => {
        setSpeechOneVisible('visible') 
      }, getRandomInt(3000, 9000))
    }

    return () => {
      clearTimeout(currentTimerOne)
    }
  }, [speechOneVisible])

  useEffect(() => {
    let currentTimerTwo
    if (speechTwoVisible === 'visible') {
      currentTimerTwo = setTimeout(() => {
        setSpeechTwoVisible('hidden')
        setSpeechDirectionTwo(!speechDirectionTwo)
        setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
      }, 4000)
    } else {
      currentTimerTwo = setTimeout(() => {
        setSpeechTwoVisible('visible')
      }, getRandomInt(3000, 9000))
    }

    return () => {
      clearTimeout(currentTimerTwo)
    }
  }, [speechTwoVisible])


  
  return (
    <>
      <div style={speechOneStyle}>
        <div className={`bubble mini ${speechDirectionOne ? 'left' : 'right'}`}>{speechOne}</div>
      </div>
      <div style={speechTwoStyle}>
        <div className={`bubble mini ${speechDirectionTwo ? 'left' : 'right'}`}>{speechTwo}</div> 
      </div>
    </>
  )
}

export default Speech
