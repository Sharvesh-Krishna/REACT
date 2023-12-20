import React, { useEffect, useState } from 'react'
import { getUser, deleteUser } from '../Services/api'
import { useNavigate } from 'react-router-dom'

const Users = () => {

  const [user, setUser] = useState([])

  const fetchData = async() => {
    try{
      const res = await getUser()
      setUser(res.data)
    }
    catch(e){
      console.log(e);
    }
  }

  const handleAdd = () => navigate("/add");

  const handleDelete = async(id) => {
    try{
      const res =  await deleteUser(id)
      if( res.status === 200 ){
        alert('deleted')
        fetchData();
      }
    }
    catch(e){
      console.log(e)
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  console.log(user)
  useEffect(()=> {fetchData()}, [])

  const navigate = useNavigate()

  return (
    <>
      <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {user.map((user)=>(
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.password}</td>
          <td><button type='submit' className='edit-btn' onClick={handleEdit(user.id)}>Edit</button></td>
          <td><button type='submit' className='delete-btn' onClick={handleDelete(user.id)}>Delete</button></td>
        </tr>
        ))
        
      }
      </tbody>
      </table>

      <button type='submit' className='add-btn' onClick={handleAdd}>Add</button>
    </>
  )
}

export default Users
