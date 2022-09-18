import React from 'react';
import { useForm } from '../../hooks/useForm';

export const Search = () => {

  const {searchCharacter, onInputChange} = useForm({ searchCharacter: '' });

  const onSubmit = (e) =>
  {e.preventDefault();
    if(searchCharacter.trim().length <= 1) return;}

  return (
    <div className='mt-3 ms-5 d-block'>
    
      <form className='formSearch d-block' onSubmit={onSubmit}>
          <input 
            type="text" 
            placeholder='Search for a character...' 
            required 
            name='searchCharacter'
            value={searchCharacter}
            onChange={onInputChange}
          />
          <div className='fontAwesomeSearch'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
      </form>

    </div>
  )
}
