import React, { useState } from 'react'

import Menu from './Menu'
import Tom from './Tom'
import Test from './Test'
import Fred from './Fred'

const App = (props) => {
  const [game, setGame] = useState('')
  return (
    <>
      <h1>Phaser Playground</h1>
      <Menu setGame={setGame} />
      {game === 'Tom' &&
        <Tom />
      }
      {game === 'Test' &&
        <Test />
      }
      {game === 'Fred' && 
        <Fred />
      }
    </>
  )
}

export default App
