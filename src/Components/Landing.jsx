import React, { useState, useEffect } from 'react'

import Clouds from './Clouds'

const Landing = ({ setScene }) => {
  const [fadeOut, setFadeOut] = useState(null)
  const [display, setDisplay] = useState('logo')
  
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')
    
    useEffect(() => {
      harpyMusic.play()

      setTimeout(() => {
      setDisplay('ed')
    }, 3900)
    setTimeout(() => {
      setDisplay('always')
    }, 7800)
    setTimeout(() => {
      setDisplay('instructions')
    }, 11700)
    }, [])

  const handleClick = () => {

    let harpMusicFade = setInterval(() => {
      harpyMusic.volume -= 0.2
      console.log(harpyMusic.volume)
      if (harpyMusic.volume < 0.25 ) {
        clearInterval(harpMusicFade)
      }
    },1000);

    setFadeOut({
      visibility: 'hidden',
      opacity: 0,
      transition: 'visibility 0s 2s, opacity 2s linear'
    })
    setTimeout(() => setScene('classroom'), 2000)
  }

  return (
  <>
      <div style={fadeOut} className="landing-container">
      {display === 'logo' &&
          <p className='landing-logo'>EDA</p>
        }
      {display === 'ed' &&
          <p className='landing-header'>Everyone Dreams...</p>
      }
      {display === 'always' &&
          <p className='landing-header'>ALWAYS</p>
      }
      {display === 'instructions' &&
      <div>
          <p className='landing-instr'>It's an afternoon lecture at Dev Academy and all of the students are starting to fall asleep.</p>
          <p className='landing-instr'>Click on the student who's dream you want to see...</p>
          <p onClick={handleClick} className='landing-instr'>Click Here to enter the classroom.</p>
      </div>
      }
      </div>
      <Clouds />
  </>
  )
}

export default Landing
