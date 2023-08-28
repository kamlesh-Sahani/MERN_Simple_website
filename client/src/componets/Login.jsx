import React, { useState } from "react";
import img1 from "../img/Developer.webp";
import { Link,useNavigate } from "react-router-dom";
import '../style/login.css';
import axios from "axios";
const Login = () => {

  const navigate  = useNavigate();
  const[user ,setUser] = useState({
    name:"",
    password:""
  });
  const handleValue = (event)=>{
    const {name,value} = event.target;
    setUser((pre)=>({
      ...pre,
      [name]:value
    }))
  }


  const handleSubmit = async(event) =>{
    event.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    const {data} =  await axios.post('http://localhost:400/login',user,config);
    if(data.success){
      alert(data.message);
      setUser({
        name:'',
        password:""
      })
      navigate('/');
    }else{
      alert(data.message);
    }
  }
  return (
    <div className="login">
    <div className="img">
      <img src={img1} alt="" />
      <Link to={"/register"}>Create an account</Link>
    </div>
    <div className="main">
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit} method="post"> 
        <input type="email" placeholder="Your Email" name="email"  value={user.email} onChange={handleValue} required/>
        <input type="password" placeholder="password" name="password" required onChange={handleValue} value={user.password}/>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  )
}

export default Login;