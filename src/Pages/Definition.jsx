import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../Components/NotFound';
import DefinitionSearch from '../Components/DefinitionSearch';

const Definition = () => {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  let { search } = useParams();

    useEffect(() => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
        fetch(url)
        .then((response) => {
          if (response.status === 404) {
            setNotFound(true)
          } else if (response === 401) {
            navigate('/login')
          } else if (response === 500) {
            setError(true)
          }
          if (!response.ok) {
            setError(true);
            throw new Error('something is not right')
          }
         return response.json()
        })
        .then((data) => {
          setWord(data[0].meanings)
        })
        .catch((e) => {
          console.log(e.message)
        })
    }, []);

    if (notFound === true) {
   
      return ( 
        <>
          <NotFound />
          <Link to='/dictionary'>Search Another</Link>
        </>
      )
    }

    if (error === true) {
   
      return ( 
        <>
          <p>something went wrong, try again</p>
          <Link to='/dictionary'>Search Another</Link>
        </>
      )
    }
    

  return (
    <>

        {word ? (
        <> 
             <h1>Here is the definition: </h1>
             {word.map((meaning) => {
              return (
                <p key={uuidv4()}>
                {meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}          
              </p>)
            })}
            <h3 className='my-3'>Search Again</h3>
            <DefinitionSearch />
        </>
        )
         : null } 
    </>
  );
}

export default Definition;