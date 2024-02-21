import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import './Footer.css';
const Footer = () => {



  const [email, setEmail] = useState("");
const subscription = async(e) => {
  e.preventDefault()
  console.log(email)
  const result= await fetch("http://localhost:5000/sendemail",{
    method:"POST",
    body: JSON.stringify({email}),
    headers:{
      "Content-Type":"application/json",
    }
  });

  const data = await result.json();

  console.log(data);
  if(data.status === 401){
    console.log("error")
    alert("error")
  }
  else{
    console.log("email send")
    alert("email send succesfully");
    setEmail(" ");
  }
  
}

  return (
    <>
      <div class="footer">
        <br />
        <div class="row mt-4">
          <div class="col-4">
            <ul type="none">
              <li><img src={require("./pic.jpg")} height="80px" alt="logo" /></li>
              <br/>
              <li>Home</li> <br/>
             
              <li>About</li>
              <br/>
              <li>Features</li>
              <br/>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-4" style={{ paddingLeft: "3px" }} >
            <h5>Subscribe to our newsletter</h5>
            <p>You'll be inform immediately</p>

            <form class="d-flex" role="search" onClick={subscription}>
              <input class="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail address" aria-label="E-mail" style={{ width: "40%", marginRight: "2%" }} />
              <br />
              <button class="btn btn-outline-success" type="submit">Subscribe</button>
            </form>
          </div>
          <div class="col-4" style={{ paddingLeft: "9px" }}>
            <h4>Contact us</h4>
            <img src="https://cdn-icons-gif.flaticon.com/6172/6172514.gif" height="30px" alt="..." /> <span>+91 8219286143 </span> <br /><br />
            <img src="https://cdn-icons-gif.flaticon.com/6844/6844338.gif" height="30px" alt="..."/><span>1721 Sector 59,Mohali</span><br /><br />
            <img src="https://cdn-icons-gif.flaticon.com/10292/10292568.gif" height="30px" alt="..." /><span>hommiedommie12@gmail.com</span>
          </div>
        </div>
        <hr class="border border-danger border-2 opacity-50" />

        <div className="end1">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <div className="end">
            <ul class="list-unstyled d-flex" >
              <h5>Follow us</h5>
              <li class="ms-3"><Link to="https://www.facebook.com/profile.php?id=100008224231791"  target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/1312/1312139.png" height="30px" alt="" /></Link></li>
              <li class="ms-3"><Link to="https://www.instagram.com/pooja_shubhdam_verma/" target="_blank" ><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" height="30px" alt="" /></Link></li>
              <li class="ms-3"><Link to="https://www.instagram.com/pooja_shubhdam_verma/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2504/2504839.png" height="30x" alt="" /></Link></li>
            </ul>
          </div>
        </div>

      </div>

    </>
  );
}
export default Footer;