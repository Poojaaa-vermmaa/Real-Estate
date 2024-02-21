import React from "react";

const rentlist = ({items})=>{

return(
    <>
    <div className="mainrent">
      <div className="rentlist">
        <div className="container" style={{border:"2px solid black"}}>
          <div className="row">
            <div className="col-6">
<img src={items.myfile} alt="..." style={{height:"300px", width:"500px"}}/>

            </div>
            <div className="col-6">
              <h5>{items.detail}</h5>
              <p>{items.location}</p>
              <h5>INR {items.price}/month</h5>
              <p>{items.measurement}</p>
              <p>{items.description}</p>
              <p>{items.details} {items.description2}</p>
              
              </div>
              <hr></hr>
              <h6>{items.ownername}</h6>
              <p>{items.contact}</p>
          </div>
        </div>
        <br/>
        <br/>
        
       
            </div>
            
      </div>
    </>
);
}
export default rentlist;