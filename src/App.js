import './App.css';
import { useState }  from "react";

function App() {

  const initialState = [{id: 3317019, name: "Jin"},{id: 222, name: "Bob"},{id: 332, name: "Tim"}]; 

  let dspUserList = "Hidden";

  const [userList, setUserList] = useState(initialState);

  const [userListVisability, setVisability] = useState(false);

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
                  <li key="userListItem.id">
                    <span>{userListItem.id} {userListItem.name}</span>
                    <button onClick={() => handleDelete(userListItem.id)}>Delete</button>
                  </li>
                )) 
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <h1>User List</h1>
        <ul>
          <button onClick={() => handleVisability(userListVisability)}></button>
          { //SELF NOTE: Why not handleDelete(...)? Executes straight away
            dspUserList
          } 
        </ul>
      </div>
    </div>
  );

}

export default App;
