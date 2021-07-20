    import React, { useState, useEffect } from 'react'

    import Header from './Header'
    import Clouds from './Clouds'
    import Speech from './Speech'
    import Thoughts from './Thoughts'

    // const talkyTalkyPeople = new Audio('/audio/classguystalking.mp3')
    // const woosh = new Audio('/audio/woosh.wav')
    const characters = [
      { name: 'fred', style: { left: '3.3rem', top: '9rem' }, img: 'fred/football.png' },
      { name: 'drive', style: { left: '15rem', top: '9rem' }, img: 'sheep_walk.png',  },
      { name: 'megan', style: { left: '3.3rem', top: '19rem' }, img: 'plane.png', },
      { name: 'ymmij', style: { left: '15rem', top: '19rem' }, img: 'Hamster_Dance.ico' },
    ]
    
    const Classroom = ({  setScene, setDream }) => {
      // change dream scene
      const [startDream, setStartDream] = useState(false)

      // fade out scene 
      const [fade, changeFade] = useState('')
      const [imgThought, changeImgThought] = useState('')

      // //play background music on load.
      // useEffect(() => {
      //   talkyTalkyPeople.play()
      // }, [])

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
        }, 2000)

        // //ymmij audio stuff:
        // let TalkingFadeIn = setInterval(() => {
        //   talkyTalkyPeople.volume += 0.2
        //   console.log(talkyTalkyPeople.volume)
        //   if (talkyTalkyPeople.volume > 0.25 ) {
        //     clearInterval(TalkingFadeIn)
        //   }
        // },1000);
  
        // let fadeVoices = setInterval(() => {
        //   talkyTalkyPeople.volume -= 0.2
        //   console.log(talkyTalkyPeople.volume)
        //   if (talkyTalkyPeople.volume < 0.4) {
        //     woosh.play()
        //   }
        //   if (talkyTalkyPeople.volume < 0.1 ) {
        //     // talkyTalkyPeople.volume = 0
        //     clearInterval(fadeVoices)
        //   }
        // },500);
        // //end
      }

      
      const renderCharacter = (item, i) => {
        return <div 
          className="click-box" 
          style={item.style} 
          onClick={() => handleClick(item.name)}
          onMouseEnter={() => fadeInThought(i)} 
          onMouseLeave={() => fadeOutThought()}
        />
      }

    return (
      <>
        <div className="container">
          <Header setScene={setScene}/>
        </div>
        <div className="container">
          <div style={{position: 'relative'}}>
            <span className='heading-small'>It's an afternoon lecture at Dev Academy and one of the students is starting to fall asleep.</span>
          </div>
        </div>
        <div className="container">
          <span className='heading-small'> Click on the student who's dream you want to see...</span>
        </div>
        <div className="container">
          <div className="classroom">
            
            <img src="/images/classroom_01.png" alt="a classrom"/>
            <Clouds />

            {characters.map((item,i) => renderCharacter(item, i))}
            
            <Speech />
            <Thoughts fade={fade} imgThought={imgThought} startDream={startDream}/>      
          </div>
        </div>
      </>
  )
}

export default Classroom
  