import React from 'react'

const Task = (props) => {
  return (
    <li key={props.id}>
        <span>{props.id} {props.name}</span>
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </li>
  )
}

export default Task