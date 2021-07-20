import React, { useState } from 'react'

import Start from './Start'
import Landing from './Landing'
import Classroom from './Classroom'
import Dream from './Dream'
import Clouds from './Clouds'

const App = (props) => {
  const [scene, setScene] = useState('')
  const [dream, setDream] = useState('')
  
 
  return (
    <>
      {scene === '' &&
        <Start setScene={setScene}/>
      }
      {scene === 'landing' &&
        <Landing setScene={setScene} />
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
