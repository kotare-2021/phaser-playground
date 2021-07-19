import React, { useState, useEffect } from 'react'

const harpyMusic = new Audio('/audio/harpMusicy.mp3')

const Landing = ({ setScene }) => {
  const [fadeOut, setFadeOut] = useState(null)

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
      <div className='container'>
        <h1 className='heading-main'>EDA</h1>
      </div>
      <div className="container">
        <h4 onClick={handleClick} className='heading-sub clickable'>Everyone Dreams...<br />Always</h4>
      </div>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
      <img src="/images/cloud.png" alt="a cloud" className='cloud-img-small'/>
    </div>
  )
}

export default Landing
