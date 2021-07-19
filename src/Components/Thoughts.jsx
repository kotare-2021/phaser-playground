import React, { useState, useEffect} from 'react'

 export function Thoughts({fade, imgThought}) {

  const oldfade = fade + 1
  return (
    <div className={ typeof fade == 'number' ? `speechBubbleCount${oldfade} Visible${oldfade} VisbleMed${oldfade}`: 'speechBubbleCount'}>
    <div className='speechBubbleBig'>
      <img className='dayDreamImg' src={`/assets/${imgThought}`} alt={imgThought}/> 
    </div>
    <div  className={ oldfade === 0 || 2 ? 'speechBubbleMedLeft Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 0 || 2 ? 'speechBubbleMedRight Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 1 || 3 ? 'speechBubbleSmallRight Visible': 'speechBubbleCount' }>
    </div>
    <div className={ oldfade === 1 || 3 ? 'speechBubbleSmallLeft Visible': 'speechBubbleCount' }>
    </div>
  </div>
  )
}

export default Thoughts
