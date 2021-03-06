import React, { useState } from 'react'

import Start from './Start'
import Landing from './Landing'
import Classroom from './Classroom'
import Dream from './Dream'
import Clouds from './Clouds'
import Skip from './Skip'


const App = (props) => {
  //state
  const [scene, setScene] = useState('')
  const [dream, setDream] = useState('')
  
  // audio files
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')
  const talking = new Audio('/audio/classguystalking.mp3')

  // triggers audio start

  const handleStart = () => {

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
      // talking.play()

      talking.play()

      let voicesFadeIn = setInterval(() => {
        talking.volume += 0.05
        if (talking.volume > 0.7) {
          clearInterval(voicesFadeIn)
        }
      }, 500)
    }, 13000)

    setTimeout(() => {
      //fade out talking
      let voicesFadeOut = setInterval(() => {
        talking.volume -= 0.01
        if (talking.volume < 0.02) {
          clearInterval(voicesFadeOut)
          talking.pause()
        }
      }, 30)
    }, 19000) 
  } // end of handleStart

  return (
    <>
      {scene === '' &&
        <div>
          <Start setScene={setScene} handleStart={handleStart}/>
          <Skip setScene={setScene}/>
        </div>
      }
      {scene === 'landing' &&
        <div>
          <Landing setScene={setScene} />
          <Skip setScene={setScene}/>
        </div>
      }
      {scene === 'classroom' &&
        <Classroom setScene={setScene} setDream={setDream} />
      }
      {scene === 'dream' &&
        <Dream dream={dream} setScene={setScene}/>
      }
      <Clouds />
    </>
  )
}

export default App
