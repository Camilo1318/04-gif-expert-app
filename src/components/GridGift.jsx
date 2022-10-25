import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Gifitem } from './Gifitem';


export const GridGift = ({categoria}) => {
  
  const { images, isLoading } = useFetchGifs( categoria );

  console.log(isLoading)
  
    return (
    <>
      <h2>{ categoria }</h2>

      {
        isLoading && (<h2>Cargando</h2>)
      }

      <div className="card-grid">
      {
        images.map( image => <Gifitem key={ image.id } { ...image }/> )
      }
      </div>
    </>
  )
}

