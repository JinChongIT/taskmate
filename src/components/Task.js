import React from 'react'

const Task = (props) => {
  return (
    <li key={props.id}>
        <span>{props.id} {props.name}</span>
    </li>
  )
}

export default Task