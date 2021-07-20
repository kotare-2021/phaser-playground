import React from 'react'

const Start = ({ setScene }) => {
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')
  const talking = new Audio('/audio/classguystalking.mp3')

  const handleClick = () => {

    harpyMusic.play()

    setScene('landing')

    setTimeout(() => {
      // fade out harp
       let harpFade = setInterval(() => {
        harpyMusic.volume -= 0.05
        if (harpyMusic.volume < 0.06) {
          clearInterval(harpFade)
          harpyMusic.pause()
        }
      }, 500)
    }, 11000)

    setTimeout(() => {
      //fade in talking
      talking.volume = 0.05
      talking.play()

      let voicesFadeIn = setInterval(() => {
        talking.volume += 0.05
        if (talking.volume > 0.7) {
          clearInterval(voicesFadeIn)
        }
      }, 500)
    }, 14000)
  }// end of onClick audio

  return (
    <>
      <div style={{width: '100vw', height: '100vh'}} onClick={handleClick}>
        <div className="landing-container">
          <p className='landing-start clickable'>Click here to begin</p>
        </div>
      </div>
    </>
  )
}

export default Start
