import React, { useState } from 'react'

import Menu from './Menu'
import Tom from './Tom'
import Test from './Test'
import Megan from './Megan'
import Ymmij from './Ymmij'
import Header from './Header'

const App = (props) => {
  const [game, setGame] = useState('Menu')
  return (
    <>
      <Header/>
      {game === "Menu" &&
      <Menu setGame={setGame} />
      }
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
