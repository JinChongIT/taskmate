import React, { useState } from 'react'

export const BoxCard = ({children}) => {

    const [visabilityCard, setVisability] = useState(true)
    let card = ""; //SELF NOTE: Why not use css show hide div as opposed to this?? https://www.reddit.com/r/reactjs/comments/b0kdkm/toggling_visibility_of_element_vs_conditional/

  
    function handleVisability() {
        if(visabilityCard) {
            setVisability(false);
          } else {
            setVisability(true);
          }
    }

    if(visabilityCard) {
        card = <div>{children}</div>
    }

  return (
    <div>
        {card}
       <button onClick={() => handleVisability()}></button>
    </div>
  )
}
