import React from 'react'

export const Task = ({id, name, onHandleDelete}) => {
  return (
    <li key={id}>
        <span>{id} {name}</span>
        <button onClick={() => onHandleDelete(id)}>Delete</button>
    </li>
  )
}
