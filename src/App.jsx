import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/';

    axios.get(URL)    
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }  

  useEffect(() => {
    getUsers()
  }, [])

  
  const createUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/';

    axios.post(URL, data)
        .then(res => {
            getUsers()
            reset(init)
        })
        .catch(err => console.log(err))
}


  return (
    <div className="App">

      <Form
      getUsers={getUsers}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      createUser={createUser}
            />

      <div>
        {
          users?.map( user => (
            <UserList
            key={user.id}
            user={user}
            getUsers={getUsers}
            setUpdateInfo={setUpdateInfo}
            />

          ))
        }
      </div>

    </div>
  )
}

export default App
