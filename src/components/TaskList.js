import React, { useState } from 'react'
import Task from './Task';

const TaskList = () => {

    let dspUserList = "Hidden";
    const initialState = [{id: 3317019, name: "Jin"},{id: 222, name: "Bob"},{id: 332, name: "Tim"}]; 

    const [userList, setUserList] = useState(initialState);
    const [userListVisability, setVisability] = useState(true);

    function handleDelete(itemId) { //SELF NOTE: Why not manually use for loop/for each because complex and relies on legnth
        setUserList(userList.filter(tmpUserElement => itemId !== tmpUserElement.id)) //Remember setUserList re-renders is triggered for ALL 
      }

    function handleVisability(visability) {
        if(visability) {
          setVisability(false);
        } else {
          setVisability(true);
        }
        
      }

    if(userListVisability) {
        dspUserList = userList.map((userListItem) => ( 
            <Task id={userListItem.id} name={userListItem.name} />
        )) 
    }

  return (
    <div>
    <h1>User List</h1>
        <ul>
        <button onClick={() => handleVisability(userListVisability)}></button>
        { //SELF NOTE: Why not handleDelete(...)? Executes straight away
            dspUserList
        } 
        </ul>
    </div>
  )

}

export default TaskList