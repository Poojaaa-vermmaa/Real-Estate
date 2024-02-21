import React from 'react';

import "./Contact.css";

const Contact = () => {
  
  

  
  return(

  <>
  <div className='contactheading'>
  <div data-aos="fade-up-right">
  <h1>Contact</h1>
  </div>
  </div>
  <br/>
  <div className="card" style={{maxWidth:"60rem", border:"2px solid orange", boxShadow:"3px 4px 40px orange"}}>
  
<div class="container">
  <div class="row">
    
    <div class="col-5">
    <form action="https://formspree.io/f/myyaawzq" method="post"  style={{padding:"5%"}}  >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1"   aria-describedby="emailHelp" placeholder="myemail@gmail.com" style={{width:"50%"}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1"   placeholder="Eg- ******" style={{width:"50%"}}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleInputPhoneNumber">Phone number</label>
    <input type="text" name="phone" class="form-control" id="exampleInputPhonenumber"   placeholder="Eg- +91 1234567890" style={{width:"50%"}}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"  placeholder="Write down your Message here" style={{width:"50%"}}></textarea>
  </div>
  <br/>
  <div class="sub">
  <button type="submit" class="btn ">Send message</button>
  </div>
</form>
<br/>
    </div>
    
    <div class="col-7">
      <div class="back">
      
      </div>
      
    </div>
    <div class="front" style={{paddingLeft:"10px",paddingTop:"10px"}}>
           
          <img src="https://cdn-icons-png.flaticon.com/128/3014/3014736.png" style={{margin:"10px"}} height="20px" alt=""/> <span><b>+91 8219286143</b> </span> 
           <img src= "https://cdn-icons-png.flaticon.com/128/727/727606.png" style={{margin:"10px"}} height="20px" alt=".."/><span><b>1721 Sector 59,Mohali</b></span>
           <img src="https://cdn-icons-png.flaticon.com/128/3686/3686989.png" style={{margin:"10px"}} height="20px" alt=".."/> <span><b>hommiedommie12@gmail.com</b></span>
          </div>
  </div>
  </div>
  </div>
   
    </>
  );
}
export default Contact;