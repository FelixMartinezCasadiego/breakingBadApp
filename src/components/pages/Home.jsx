import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ItemListContainer } from '../item/ItemListContainer';

export const Home = () => {

  const [searchParams] = useSearchParams();

  const q = searchParams.get('q');

  return (
    <>
    
      <ItemListContainer q={q} />
    
    </>
  )
}
