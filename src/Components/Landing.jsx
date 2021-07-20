import React, { useState, useEffect } from 'react'
import Header from './Header'
import Clouds from './Clouds'




const Landing = ({ setScene }) => {
  const [fadeOut, setFadeOut] = useState(null)
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')

  useEffect(() => {
    harpyMusic.play()
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
    <div style={fadeOut}>
      <div>
        <Header setScene={setScene}/>
        <div className="container">
          <h4 onClick={handleClick} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
        </div>
      </div>
      <Clouds />
    </div>
  )
}

export default Landing
