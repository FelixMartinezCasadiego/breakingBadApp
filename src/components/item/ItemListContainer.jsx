import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { retriveCharacterByName, retriveCharacters, retriveQuotes } from '../../api/main';
import { ItemList } from './ItemList';

export const ItemListContainer = ({q}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        
        if(q !== null & q !== ''){
            retriveCharacterByName(q)
                .then((resp) => setCharacters(resp))
                .catch((err) => {throw new Error(err)})
        } else {
            retriveCharacters()
                .then((resp) => setCharacters(resp))
                .catch((err) => {throw new Error(err)});
        }

    }, [q])


  return (
    <>
        <div className='container-fluid'>
            
            <div className='row col-12 d-flex justify-content-center m-0 px-5'>

                {
                    characters.map((character) => <ItemList character={character} key={character.char_id} /> )
                }

            </div>          

        </div>
    </>

  )
}
