import React from 'react'
import { Link } from 'react-router-dom'

export const PrevButton = () => {
  return (
    <div className='prevButton'>
        <Link to='/'> 
          <button type="button">Ops, errei meu cep!</button>
        </Link>
    </div>    
  )
}
