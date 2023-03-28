import React from 'react'
import './list.css'

function List(data) {
    const user=data.data;
  return (
    <div className='userRibbon'>
        
        <img src={user.profilepicture} alt={user.name} />
        <p>{user.name}</p>
       
    </div>
  )
}

export default List