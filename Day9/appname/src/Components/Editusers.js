import React, { useEffect, useState } from 'react'
import { getUserId, editUser } from '../Services/api'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();
  
  const [data, setData] = useState({
    username:'',
    password:'',
  });

  const fetchUser = async() => {
    try{
      const res = await getUserId(id);
      setData(res.data);
    }
    catch(e){
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setData({...data, [e.target.id] : e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res = await editUser(id, data);
        if(res.status === 200){
          alert("User Updated!");
          navigate("/");
        }
    }
    catch(e){
        console.log(e);
    }
  };
  
  useEffect(()=>{
    fetchUser();
  }, [])

  return (
    <div className='edit-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' id='username' value={data.username} placeholder='username' onChange={handleChange}/>
        <input type='password' id='password' value={data.password} placeholder='password' onChange={handleChange}/>
        <input type='submit' value="Update" className='submit-btn' onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Editusers
