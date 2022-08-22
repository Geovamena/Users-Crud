import React from 'react'
import axios from "axios"

const Card = ({ user, getAllUsers, setUpdateInfo }) => {

  const deleteUser = id => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const getInfoUpdate = () => {
    setUpdateInfo(user)
  }

  return (

    <article className='card'>

      <ul className='card__list'>

        <li className='card__item'> <b>First name:</b> <span className='card__span'>{user.first_name}</span></li>

        <li className='card__item'> <b>Last name:</b> <span className='card__span'>{user.last_name}</span></li>

        <li className='card__item'> <b>Email:</b><span className='card__span'>{user.email}</span></li>

        <li className='card__item'> <b>Birthday</b> <span className='card__span'>{user.birthday}</span></li>
        
      </ul>

      <footer className='card__footer'>
        <button onClick={() => deleteUser(user.id)} className='card__btn'>Delete</button>
        <button onClick={getInfoUpdate} className='card__btn'>Update</button>

      </footer>
    </article>
  )
}

export default Card