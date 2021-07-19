
    import React, { useState } from 'react'

    import Header from './Header'
    import Clouds from './Clouds'
    import Speech from './Speech'

    const talkyTalkyPeople = new Audio('/audio/classguystalking.mp3')
    const woosh = new Audio('/audio/woosh.wav')
    
    const Classroom = ({  setScene, setDream }) => {
      // change dream scene
      const [startDream, setStartDream] = useState(false)
    
      // fade out scene 
      const [fadeOut, setFadeOut] = useState(null)
    
      //variables for clickbox positioning
      const charOneStyle = {
        left: '3.3rem',
        top: '9rem'
    }
      const charTwoStyle = {
        left: '15rem',
        top: '9rem'
      }
      const charThreeStyle = {
        left: '3.3rem',
        top: '19rem'
      }
      const charFourStyle = {
        left: '15rem',
        top: '19rem'
      }
    
      const [fade, changeFade] = useState('')
      const [imgThought, changeImgThought] = useState('')
      const [fadeVisNum, changefadeVisNum] = useState('')

      //play background music on load.
      useEffect(() => {
      talkyTalkyPeople.play()
    }, [])
  
    
      function imgDayDream(num) {
        if(num === 1) {
          changeImgThought('football.png')
        }
      }
    
      function fadeInThought(num) {
        if (num === 1) {
          changeImgThought('football.png')
          changeFade(num)
          changefadeVisNum(num)
        } else if (num === 2) {
          changeImgThought('sheep_walk.png')
          changeFade(num)
          changefadeVisNum(num)
        } else if (num === 4) {
          changeImgThought('Hamster_Dance.ico')
          changeFade(num)
          changefadeVisNum(num)
        }
      }
    
      function fadeOutThought() {
        changeFade('')
        changefadeVisNum('')
        changeImgThought('')
      }
    
      //On click select dream and render dream component
      const handleClick = (string) => {

    //ymmij audio stuff:
    let TalkingFadeIn = setInterval(() => {
      talkyTalkyPeople.volume += 0.2
      console.log(talkyTalkyPeople.volume)
      if (talkyTalkyPeople.volume > 0.25 ) {
        clearInterval(TalkingFadeIn)
      }
    },1000);

    let fadeVoices = setInterval(() => {
      talkyTalkyPeople.volume -= 0.2
      console.log(talkyTalkyPeople.volume)
      if (talkyTalkyPeople.volume < 0.4) {
        woosh.play()
      }
      if (talkyTalkyPeople.volume < 0.1 ) {
        // talkyTalkyPeople.volume = 0
        clearInterval(fadeVoices)
      }
    },500);
    //end
    

        setStartDream(true)
        setFadeOut({
          visibility: 'hidden',
          opacity: 0,
          transition: 'visibility 0s 2s, opacity 2s linear'
        })
        setTimeout(() => {
          setScene('dream')
          setDream(string)
        }, 2000)
      }
    
      return (
        <div style={fadeOut}>
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
    
              <Speech />
              
              <div className="click-box" style={charOneStyle} onClick={() => handleClick('fred')}onMouseEnter={() => fadeInThought(1)} onMouseLeave={() => fadeOutThought()}> </div>
              <div className="click-box" style={charTwoStyle} onClick={() => handleClick('drive')}onMouseEnter={() => fadeInThought(2)} onMouseLeave={() => fadeOutThought()}></div>
              <div className="click-box" style={charThreeStyle} onClick={() => handleClick('megan')}onMouseEnter={() => fadeInThought(3)} onMouseLeave={() => fadeOutThought()}></div>
              <div className="click-box" style={charFourStyle} onClick={() => handleClick('ymmij')}onMouseEnter={() => fadeInThought(4)} onMouseLeave={() => fadeOutThought()}></div>
    
              <img src="/images/classroom_01.png" alt="a classrom"/>
    
              <Clouds />
    
              <div className={ fade ? `speechBubbleCount${fade} Visible${fadeVisNum} VisbleMed${fadeVisNum}`: 'speechBubbleCount'}>
                <div className='speechBubbleBig'>
                  <img className='dayDreamImg' src={`/assets/${imgThought}`} alt={imgThought}/> 
                </div>
                <div  className={ fade === 1 || 3 ? 'speechBubbleMedLeft Visible': 'speechBubbleCount' }>
                </div>
                <div className={ fade === 1 || 3 ? 'speechBubbleMedRight Visible': 'speechBubbleCount' }>
                </div>
                <div className={ fade === 2 || 4 ? 'speechBubbleSmallRight Visible': 'speechBubbleCount' }>
                </div>
                <div className={ fade === 2 || 4 ? 'speechBubbleSmallLeft Visible': 'speechBubbleCount' }>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Classroom





  