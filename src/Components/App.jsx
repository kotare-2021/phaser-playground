import React, { useState } from 'react'


import Landing from './Landing'
import Classroom from './Classroom'
import Dream from './Dream'
import Clouds from './Clouds'

const App = (props) => {
  const harpyMusic = new Audio('/audio/harpMusicy.mp3')

  const [scene, setScene] = useState('')
  const [dream, setDream] = useState('')

  const handleClick = () => {
    harpyMusic.play()
    setScene('landing')
  }

  return (
    <>
      {scene === '' &&
        <div style={{width: '100vw', height: '100vh'}} onClick={handleClick}>
          <div className="landing-container">
            <p className='landing-start clickable'>Click here to begin</p>
          </div>
      </div>
      }
      {scene === 'landing' &&
        <Landing setScene={setScene} />
      }
      {scene === 'classroom' &&
        <Classroom setScene={setScene} setDream={setDream}/>
      }
      {scene === 'dream' &&
        <Dream dream={dream} setScene={setScene} />
      }
      <Clouds />
    </>
  )
}

export default App
