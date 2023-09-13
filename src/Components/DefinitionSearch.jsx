import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const DefinitionSearch = () => {
    const [word, setWord] = useState('');
    const navigate = useNavigate()
  return (
    <form 
        className='flex justify-center space-x-2 max-w-[300px]'
        onSubmit={() => {
            navigate('/dictionary/' + word)
        }} >
        <input 
            className='shrink min-w-0 p-2 rounded'
            placeholder='type word'
            type="text" 
            onChange={(e) => {
                setWord(e.target.value)
            }} 
        />
        <button
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold rounded py-1 px-2'
        >
            Search
        </button>
    </form>
  )
}

export default DefinitionSearch