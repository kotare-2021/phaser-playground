import React, { useState } from 'react'

import Header from './Header'
import Clouds from './Clouds'
import Speech from './Speech'
import Thoughts from './Thoughts'


// import {fadeInThought} from './Thoughts'
// // import {imgDayDream} from './Thoughts'
// import {fadeOutThought} from './Thoughts'

const characters = [
  { name: 'fred', style: { left: '3.3rem', top: '9rem' }, img: 'football.png' },
  { name: 'drive', style: { left: '15rem', top: '9rem' }, img: 'sheep_walk.png',  },
  { name: 'megan', style: { left: '3.3rem', top: '19rem' }, img: '', },
  { name: 'ymmij', style: { left: '15rem', top: '19rem' }, img: 'Hamster_Dance.ico' },
]

const Classroom = ({  setScene, setDream }) => {
  // change dream scene
  const [startDream, setStartDream] = useState(false)
  // fade out scene 
  const [fadeOut, setFadeOut] = useState(null)
  const [fade, changeFade] = useState('')
  const [imgThought, changeImgThought] = useState('')
  

  function fadeInThought(num) {
    changeImgThought(characters[num].img)
    changeFade(num)

  }

  function fadeOutThought() {
    changeFade('')
    changeImgThought('')
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

  const renderCharacter = (item, i) => {
    return <div 
      className="click-box" 
      style={item.style} 
      onClick={() => handleClick(item.name)}
      onMouseEnter={() => fadeInThought(i)} 
      onMouseLeave={() => fadeOutThought()}
    />
  }

  return (
    <div style={fadeOut}>
      <div className="container">
        <Header setScene={setScene}/>
      </div>
      <div className="container">
        <div style={{position: 'relative'}}>
          <span className='heading-small'>It's an afternoon lecture at Dev Academy and one of the students is starting to fall asleep.</span>
        </div>
      </div>
      <div className="container">
        <span className='heading-small'> Click on the student who's dream you want to see...</span>
      </div>
      <div className="container">
        <div className="classroom">
          
          <img src="/images/classroom_01.png" alt="a classrom"/>
          <Clouds />

          {characters.map((item,i) => renderCharacter(item, i))}
          
          <Speech />
          <Thoughts fade={fade} imgThought={imgThought} />      

        </div>
      </div>
    </div>
  )
}

export default Classroom
