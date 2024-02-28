import React from 'react'

export const Tile = ({title, description}) => {
  return (
    <div className='tile'>
        <h2 className="tile__header">{title}</h2>
        <p className='tile__description'>{description}</p>
    </div>
  )
}
