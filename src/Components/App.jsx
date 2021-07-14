import React, { useState } from 'react'

import Menu from './Menu'
import Tom from './Tom'
import Test from './Test'
import Megan from './Megan'
import Ymmij from './Ymmij'

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
      }{game === 'Megan' &&
      <Megan />
    }
    {game === 'Ymmij' &&
    <Ymmij />
    }
    </>
  )
}

export default App
