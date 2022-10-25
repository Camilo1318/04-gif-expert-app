import React from 'react'

export const Gifitem = ({url,nombre}) => {
    
    return (
        <div className="card">
          <img src={url}/>
          <p>{nombre}</p>
        </div>
      )
}
