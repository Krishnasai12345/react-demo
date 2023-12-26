import React, { useRef, useState } from 'react';
import Welcom from '../Welcom';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';


const Login = (props) => {
  const user = useRef(null);
  const pass = useRef(null);
  const LoginFunction=()=>{
    
    var obj={
      username:user.current.value,
      password:pass.current.value
    }
    console.log(obj)
    fetch('http://localhost:8080/log/checkUser',{
      method:'get',
      //  headers: {
      //   'Content-type': 'application/json',
      // }
  }) 
  .then(res=>res.text())
  .then(res=>{
    console.log("in Login",res)
     props.cb(res)
  })
  .catch(res=>{
    console.log(res)
  })
   
  }

  return (
   
    <div className='log'>
      username:<input type = "text"   ref = {user}  className='form-control' /><br/>
      password:<input type ="password" ref = {pass} className='form-control'/><br/>
      <button className='bg-primary' onClick={LoginFunction}>Submit</button>
    </div>
);
}

export default Login;
