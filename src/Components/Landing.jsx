import React, { useState, useEffect } from 'react'

const Landing = ({ setScene }) => {

  const [display, setDisplay] = useState('logo')
    
    useEffect(() => {
      setTimeout(() => {
      setDisplay('ed')
    }, 3900)
    setTimeout(() => {
      setDisplay('always')
    }, 7800)
    setTimeout(() => {
      setDisplay('instructions')
    }, 11700)
    setTimeout(() => {
      setScene('classroom')
    }, 19600)
    }, [])

  return (
  <>
    <div className="landing-container">
    {display === 'logo' &&
        <p className='landing-logo'>EDA</p>
      }
    {display === 'ed' &&
        <p className='landing-header'>Everyone Dreams...</p>
    }
    {display === 'always' &&
        <p className='landing-header'>ALWAYS</p>
    }
    {display === 'instructions' &&
    <div>
        <p className='landing-instr'>Bren's teaching an afternoon lecture and some of the students are starting to fall asleep.</p>
    </div>
    }
    </div>
  </>
  )
}

export default Landing
