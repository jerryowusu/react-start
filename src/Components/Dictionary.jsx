import React, { useState, useEffect } from 'react'

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('state updated', word + ' ' + word2)
    }, [word]);

  return (
    <div>
        <input 
            type="text" 
            onChange={(e) => {
                setWord(e.target.value)
            }} />
        <h1>Let's get the definition for {word}</h1>
        
        <input 
            type="text" 
            onChange={(e) => {
                setWord2(e.target.value)
            }} />
        <h2>Let's get the definition for {word2}</h2>


        
    </div>
  )
}

export default Dictionary