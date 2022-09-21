import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { retriveCharacterByName } from '../../api/main';
import { Item } from './Item';

export const ItemContainer = () => {

    const [characterName, setCharacterName] = useState([]);

    let params = useParams();

    const characterByName = params.id;

    useEffect(() => {
        if(characterByName !== null){
            retriveCharacterByName(characterByName)
                .then((resp) => setCharacterName(resp))
                .catch((err) => {throw new Error(err)})
        }

    }, [characterByName])
    

    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>

                    {
                        characterName.map((character) => <Item character={character} key={character.char_id} /> )
                    }


            </div>
        
        </>
    )
}
