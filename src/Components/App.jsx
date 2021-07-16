import React, { useState } from 'react'

import Menu from './Menu'
import Tom from './Tom'
import Test from './Test'
import Casey from './Casey'

const App = (props) => {
  const [game, setGame] = useState('')
  return (
    <>
      <h1>Phaser Playground</h1>

      <Casey />
      {/* <Menu setGame={setGame} />
      {game === 'Tom' &&
        <Tom />
      }
      {game === 'Test' &&
        <Test />
      }
      {game === 'Casey' &&
      <Casey />
      } */}
    </>
  )
}

export default App
