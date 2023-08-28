import React, { useEffect, useState } from 'react';
import img2 from '../img/Web-Developer.jpg'
import { Link, useNavigate } from 'react-router-dom'; 
import '../style/register.css'
import axios from 'axios';

const Register = () => {

const navigate = useNavigate()
  const [register,setRegister] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    confirmPassword:""
  });

  const handleValue= (event)=>{
    const {name,value} = event.target;
    setRegister((pre)=>({
      ...pre,
      [name]:value
    }))


  }


  const handleSubmit =async(event)=>{
    event.preventDefault();
    try{

      const {data} = await axios.post('http://localhost:400/register',register);
      setRegister({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        confirmPassword:""
      })
      if(data.success){
        alert(data.message);
        navigate('/login'); // Redirect to the login page
      }
      else{
        alert("registeration is faild");
      }
    }catch(error){
      console.error(error);
    }
  
  }
  return (
    <div className='register'>
        <div className="main">
            <h1>Sign Up</h1>
            <form >
                <input type="text" placeholder='your name' name="name" value={register.name} onChange={handleValue}/>
                <input type="email" placeholder='your Email' name="email" value={register.email} onChange={handleValue}/>
                <input type="text" placeholder='mobile no' name="phone" value={register.phone} onChange={handleValue}/>
                <input type="text"  placeholder='your profession' name="work" value={register.work} onChange={handleValue}/>
                <input type="text" placeholder='Password' name="password" value={register.password} onChange={handleValue}/>
                <input type="text" placeholder='confirm Password' name="confirmPassword" value={register.cpassword} onChange={handleValue}/>
                <button type='submit' onClick={handleSubmit}>Register</button>
            </form>
        </div>

        <div className="img">
            <img src={img2} alt="" />
            <Link to={"/login"}>Login Account </Link>
        </div>
    </div>
  )
}

export default Register