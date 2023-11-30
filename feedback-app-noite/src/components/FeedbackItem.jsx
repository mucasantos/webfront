import React from 'react'
import { useState } from 'react'

function FeedbackItem() {
const [avalia, setAvalia] = useState(5)

const clicaBtn = ()=> {
    
    //Forma 1 de chamar
   // setAvalia(17)

    setAvalia((prev)=> {
        return prev + 1
    })
}

  return (
    <div className='card'>
        <div className='num-display'>{avalia}</div>
        <div>Eu sou uma avaliação!</div>
<button onClick={clicaBtn}>Clique</button>
    </div>
  )
}

export default FeedbackItem