import React, { useState } from 'react'

<<<<<<< HEAD
import Menu from './Menu'
import Tom from './Tom'
import Test from './Test'
import Fred from './Fred'
=======
import Landing from './Landing'
import Classroom from './Classroom'
import Dream from './Dream'
>>>>>>> a2a52386b1e184c281d583f0de119885ae92f35e

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
      {
        scene === 'dream' &&
        <Dream dream={dream} setScene={setScene}/>
      }
      {/* <Menu setGame={setGame} />
      {game === 'Tom' &&
        <Tom />
      }
      {game === 'Test' &&
        <Test />
<<<<<<< HEAD
      }
      {game === 'Fred' && 
        <Fred />
      }
=======
      }{game === 'Megan' &&
      <Megan />
    }
    {game === 'Ymmij' &&
    <Ymmij />
    } */}
>>>>>>> a2a52386b1e184c281d583f0de119885ae92f35e
    </>
  )
}

export default App
