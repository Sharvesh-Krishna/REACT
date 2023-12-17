import { useState } from "react";

const StateEx=()=>
{
    const[data,setData]=useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.id})
        console.log(data)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("final data")
        console.log(data.username)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" id="username" onChange={handleChange}/>
            <input type="text" placeholder="password" id="password" onChange={handleChange}/>
            <input type="submit" value="Login"/>
        </form>
        </>
    )
}

export default StateEx