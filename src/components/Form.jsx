import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValue = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}

const Form = ({ createNewUser, getAllUsers, updateInfo, setUpdateInfo, }) => {

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])

  const submit = data => {
    if (updateInfo) {
      // Update User
      const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
      axios.patch(URL, data)
        .then(res => {
          console.log(res.data)
          getAllUsers()
        })
        .catch(err => console.log(err))
        reset(defaultValue)
        setUpdateInfo(null)
    } else {
      createNewUser(data)
      reset(defaultValue)
    }

  }

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>

      <h2 className='create'>{updateInfo ? 'Update User' : 'Create User'}</h2>
      <hr />
      <ul>

      <li className='form__item'>
          <label htmlFor="first_name">First name</label>
          <input {...register("first_name")} type="text" id='first_name' />
        </li>

        <li className='form__item'>
          <label htmlFor="last_name">Last name</label>
          <input {...register("last_name")} type="text" id='last_name' />
        </li>

        <li className='form__item'>
          <label htmlFor="birthday">Birthday</label>
          <input {...register("birthday")} type="date" id='birthday' />
        </li>

        <li className='form__item'>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="email" id='email' />
        </li>

        <li className='form__item'>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id='password' />
        </li>

      </ul>

      <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    
    </form>
  )
}

export default Form

