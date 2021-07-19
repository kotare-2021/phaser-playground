import React, { useState } from 'react'


import Landing from './Landing'
import Classroom from './Classroom'
import Dream from './Dream'

const App = (props) => {
  const [scene, setScene] = useState('landing')
  const [dream, setDream] = useState('')

  return (
    <>
      {scene === 'landing' &&
        <Landing setScene={setScene} />
      }
      {scene === 'classroom' &&
        <Classroom setScene={setScene} setDream={setDream}/>
      }
      {scene === 'dream' &&
        <Dream dream={dream} setScene={setScene}                  />
      }
    </>
  )
}

export default App
