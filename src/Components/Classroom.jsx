    import React, { useState } from 'react'

    import Header from './Header'
    import Speech from './Speech'
    import Thoughts from './Thoughts'

    const characters = [
      { name: 'fred', style: { left: '3.3rem', top: '9rem' }, img: 'fred/football.png' },
      { name: 'drive', style: { left: '15rem', top: '9rem' }, img: 'sheep_walk.png',  },
      { name: 'megan', style: { left: '3.3rem', top: '19rem' }, img: 'plane.png', },
      { name: 'ymmij', style: { left: '15rem', top: '19rem' }, img: 'Hamster_Dance.ico' },
    ]
    
    const Classroom = ({  setScene, setDream, fadeTalking }) => {
      // change dream scene
      const [startDream, setStartDream] = useState(false)

      // fade out scene 
      const [fade, changeFade] = useState('')
      const [imgThought, changeImgThought] = useState('')

      function fadeInThought(num) {
        changeImgThought(characters[num].img)
        changeFade(num)
      }

      function fadeOutThought() {
        changeFade('')
        changeImgThought('')
      }

      //On click select dream and render dream component
      const handleClick = (string) => {
        setStartDream(true)

        setTimeout(() => {
          setScene('dream')
          setDream(string)
        }, 4000)
      }

      const renderCharacter = (item, i) => {
        return <div
          key={i} 
          className="click-box" 
          style={item.style} 
          onClick={() => handleClick(item.name)}
          onMouseEnter={() => fadeInThought(i)} 
          onMouseLeave={() => fadeOutThought()}
        />
      }

    return (
      <>
      <div className='classroom-fade'>
        <div className="container">
          <Header setScene={setScene}/>
        </div>
        <div className="container">
          <span className='heading-small'> Click on the student who's dream you want to see...</span>
        </div>
        <div className="container">
          <div className="classroom">
            
            <img src="/images/classroom_01.png" alt="a classrom"/>

            {characters.map((item,i) => renderCharacter(item, i))}
            
            <Speech />
            <Thoughts fade={fade} imgThought={imgThought} startDream={startDream}/>      
          </div>
        </div>
      </div>
      </>
  )
}

export default Classroom
  