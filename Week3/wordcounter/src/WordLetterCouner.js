import React, { useState } from 'react'

const WordLetterCouner = () => {
    const[text,setText]=useState('');

    const countWords=()=>{
        const words=text.trim().split(/\s+/);
        return words.length;
    }

    const countLetters=()=>{
        const letters=text.replace(/\s/g,'').split('');
        return letters.length
    }

    const handleInputChange=(e)=>{
        setText(e.target.value)
    }

  return (
    <div className='word-letetr-counter'>
        <h2>Word and Letter Counter</h2>
        <textarea placeholder='Type your text here.....' value={text} onChange={handleInputChange} className='input-textarea'></textarea>
        <div className='counter-results'>
            <p>Word Count:{countWords()}</p>
            <p>Letter Count:{countLetters()}</p>
        </div>
      
    </div>
  )
}

export default WordLetterCouner
