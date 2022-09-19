import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { retriveCharacters } from '../../api/main';
import { Item } from './Item';

export const ItemContainer = () => {

    let params = useParams();

    let characterByName = params.id;

    const [characterName, setCharacterName] = useState([]);

    useEffect(() => {

        retriveCharacters(characterByName)
            .then((resp) => setCharacterName(resp) )
            .catch((err) => {throw new Error(err)})

    }, [characterByName])
    

    return (
        <>
        
            <div className='container-fluid'>

                <div>
                    {
                        characterName.map((character) => <Item character={character} key={character.char_id} /> )
                    }
                </div>

            </div>
        
        </>
    )
}
