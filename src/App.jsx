import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'
import Form from './components/Form'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllUsers = () => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'

    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err)) 
  }

  return (
    <div className="App">
      
      <div className='form-container'>
        <Form
         createNewUser={createNewUser}
         updateInfo={updateInfo}
         getAllUsers={getAllUsers}
         setUpdateInfo={setUpdateInfo}
        />
      </div>

      {/* <button onClick={createNewUser}> Create User</button> */}

      <div className='card-container'>
        {
          users?.map(user => (
            <Card
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
