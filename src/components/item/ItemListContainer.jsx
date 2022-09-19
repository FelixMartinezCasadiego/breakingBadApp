import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { retriveCharacters, retriveQuotes } from '../../api/main';
import { Search } from '../pages/Search';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [characters, setCharacters] = useState([]);

    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        
        retriveCharacters()
            .then((resp) => setCharacters(resp))
            .catch((err) => {throw new Error(err)});

        retriveQuotes()
        .then((resp) => setQuotes(resp))
        .catch((err) => {throw new Error(err)})

    }, [])

  return (
    <>
        <div className='container-fluid'>

            <div>
                <Search />
            </div>
            
            <div className='row col-12 d-flex justify-content-center m-0 px-5'>
            {
                characters.map((character) => <ItemList character={character} key={character.char_id} quotes={quotes} /> )
            }
            </div>          

        </div>
    </>

  )
}
