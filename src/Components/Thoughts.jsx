import React from 'react'

 export function Thoughts({fade, imgThought, startDream}) {

  const oldfade = fade + 1
  return (
    <>
    <div className={ typeof fade == 'number' ? `speechBubbleCount${oldfade} Visible${oldfade} VisbleMed${oldfade}`: 'speechBubbleCount'}>
    <div className='BubbleBig'>
      <img className='dayDreamImg' src={`/assets/${imgThought}`} alt={imgThought}/>
    </div>
    <div  className={ oldfade === 0 || 2 ? 'BubbleMedLeft Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 0 || 2 ? 'speechBubbleMedRight Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 1 || 3 ? 'speechBubbleSmallRight Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 1 || 3 ? 'speechBubbleSmallLeft Visible': 'speechBubbleCount' }>
    </div>
  </div>
  <div className={startDream ? 'fadeOut' : undefined}></div>
  </>
  )
}

export default Thoughts
