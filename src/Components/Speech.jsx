import React, { useState, useEffect} from 'react'

const Speech = (props) => {
  // set speech bubble content
  const [speechOne, setSpeechOne] = useState('')
  const [speechTwo, setSpeechTwo] = useState('')

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

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

    //On render set speech boxes to random conversation
  useEffect(() => {
    setSpeechOne(conversation[getRandomInt(0, conversation.length)])
    setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
  }, [] )

  //Logic for repeating random speech boxes
  useEffect(() => {
      setTimeout(() => {
        setSpeechOneVisible('visible')
        setTimeout(() => {
          setSpeechOneVisible('hidden')
          setSpeechOne(conversation[getRandomInt(0, conversation.length)])
          setSpeechDirectionOne(!speechDirectionOne)
        }, 4000)
      }, getRandomInt(3000, 9000)) 
  }, [speechOne])

  useEffect(() => {
      setTimeout(() => {
        setSpeechTwoVisible('visible')
        setTimeout(() => {
          setSpeechTwoVisible('hidden')
          setSpeechTwo(conversation[getRandomInt(0, conversation.length)])
          setSpeechDirectionTwo(!speechDirectionTwo)
        }, 4000)
      }, getRandomInt(3000, 9000))
  }, [speechTwo])


  // speech bubble content
  const conversation = [
    'Have you heard of Batmna?',
    'Has anyone seen Poncho?',
    'Man that teacher loves drones',
    'That Lucas guy asks a lot of questions',
    'Handlebars is amazing!',
    '*Fred* Hey Bren...',
    '*Lucas* **insert impossible question here**',
    'I have no idea what\'s going on',
    'It\'s definitely not going to get any harder than this...',
    'The great thing about blockchain is',
    'I should really start my Trello Board...',
    'Will be born who can swim faster than a shark?',
    'I hate CSS',
    'Why doesn\'t Cleo love me?',
    'I wonder how big the baby is this week',
    'Wait what?!',
    '2 Repo\'s is the way to go',
    'What am I going to say in my lightning talk?!'
  ]
  
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
