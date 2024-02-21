import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';


 const Signup =() => {
  
   const [ name , setName] = useState("");
   const [ email , setEmail] = useState("");
   const [password, setPass ] = useState("");
   
   
   const navigate= useNavigate()

   const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(name,email,password);
    
        let result = await fetch('http://127.0.0.1:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
        },
         });
         result = await result.json()
         console.log(result);
         if(result.email){
          localStorage.setItem("users", JSON.stringify(result));
          navigate('/')
         }
         alert('You sign up successfully');
        }
  return(
  <>
  <div data-aos="flip-right">
 <div className="d-flex align-item-center justify-content-center w-100 mt-4">
 <form onSubmit={handleSubmit} style={{border:"2px solid black", boxShadow:"5px 6px 6px blue",padding:"65px", marginTop:"10px"}} >
    <h4 className='bg-dark p-2  text-light text-center'>Signup</h4>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter your name</label>
    <input type="text" value={name} className="form-control" onChange={(e)=> setName(e.target.value)} aria-describedby="nameHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} className="form-control" onChange={(e)=> setEmail(e.target.value)}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type='password' value={password} className="form-control"  onChange={(e)=> setPass(e.target.value)} />
 
  </div>
  
  <button type="submit" className="btn" style={{backgroundColor:"blue", color:"white"}} >Signup</button>
  <span style={{margin:"9px"}}>Already user</span><Link to="/signin">Login</Link>

  {/* <h6>Login with Google</h6> */}
  
  </form>
  </div>
  </div>
  </>
  )
}
export default Signup;