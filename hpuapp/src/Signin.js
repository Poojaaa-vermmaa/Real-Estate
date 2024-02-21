import React,{useEffect, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import{BsFillEyeFill} from 'react-icons/bs'


const Signin =() => {

  
  const[showPassword,setShowPassword] = useState(false)
  const [email, setEmail]= useState("");
  const [password, setPassword] = useState("");
 
  const navigate= useNavigate()

 useEffect(()=>{
  const data = localStorage.getItem("user");
  if(data){
    navigate("/");
  }
 });

   const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(email,password);
    
        let result = await fetch('http://127.0.0.1:5000/userlogin',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
        },
         });
         result = await result.json()
         console.log(result);
         if(result){
          navigate('/');
          alert("Login successfully");
         } else{
          alert("user not found");
         }

         };
       
        
  
  return(
    <>
<div data-aos="flip-left">
<div className="d-flex align-item-center justify-content-center w-100 mt-4">
 <form onSubmit={handleSubmit} style={{border:"2px solid darkred", boxShadow:"2px 4px 6px darkred",padding:"40px", marginTop:"20px"} } > 
    <h4 className='bg-dark p-2  text-light text-center'>Signin</h4>
  
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    value={email} className="form-control" 
    id="email" 
    onChange={(e)=> setEmail(e.target.value)}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type={showPassword ? "text":"password"} value={password} className="form-control" id="password" onChange={(e)=> setPassword(e.target.value)} />
  <span>Show password<BsFillEyeFill 
  className="ms-2" 
  onClick={() =>{
    setShowPassword((prevState)=> !prevState);
  }
  }/> </span>
   {/* <Link to="/Forget">Forget Password</Link> */}
  </div>
  
  <button type="submit" className="btn" style={{backgroundColor:"darkred", color:"white",}}>Signin</button>
 

   <span style={{margin:"9px"}}>New user</span> <Link to="/signup">Sign up</Link>
  </form>
  </div>
  </div>
  </>
  )
}
export default Signin;