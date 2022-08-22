import axios from 'axios';
import React from 'react'

const UserList = ({user, getUsers, setUpdateInfo}) => {

    const deleteCard = id => {
        const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
        axios.delete(URL)
            .then(res => {
                getUsers()
            })
            .catch(err => console.log(err.response.data))    
    }


    const getInfo = () => {
        setUpdateInfo(user)
    }


  return (
    <article>
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
            <li><span>{user.email}</span></li>
            <li>{user.birthday}</li>
        </ul>
        <button onClick={() => deleteCard(user.id)} >❌</button>
        <button onClick={getInfo}>🖊</button>
    </article>
  )
}

export default UserList