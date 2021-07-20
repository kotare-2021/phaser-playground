import React, { useEffect } from 'react'

const Audio = (props) => {
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')

  const talkyTalkyPeople = new Audio('/audio/classguystalking.mp3')
  
  const woosh = new Audio('/audio/woosh.wav')

  
  useEffect(() => {
    harpyMusic.play()
    
    //ymmij audio stuff:
    let TalkingFadeIn = setInterval(() => {
      talkyTalkyPeople.volume += 0.2
      console.log(talkyTalkyPeople.volume)
      if (talkyTalkyPeople.volume > 0.25 ) {
        clearInterval(TalkingFadeIn)
      }
    },1000);
    
    let fadeVoices = setInterval(() => {
      talkyTalkyPeople.volume -= 0.2
      console.log(talkyTalkyPeople.volume)
      if (talkyTalkyPeople.volume < 0.4) {
        woosh.play()
      }
      if (talkyTalkyPeople.volume < 0.1 ) {
        // talkyTalkyPeople.volume = 0
        clearInterval(fadeVoices)
      }
    },500);
    //end
  })

  return (
    <>
    </>
  )
}

export default Audio
