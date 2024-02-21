import React, {  useState } from "react";
import "./Rent.css";
import Rentlist from "./Rentlist";

const Rent = ()=>{

  const [ property , setProperty] = useState([]);
  const[loading,setLoading]=useState(false);
  const [data,setData]=useState([]);

  const handleSubmit =(e)=>{
    e.preventDefault();
    const fetchData= async()=>{
      setLoading(true);
      try{
      let result = await fetch(`http://127.0.0.1:5000/location?place=${property}`);
      let data = await result.json();
       setData(data);
       console.log(data)  
      }
      catch(error){
       console.log("Error in Fetching data")
 
      } 
      setLoading(false);
     }
     fetchData();
    
   
  }
  

  
    return(
        <>
        <div className="property">
    <h1 style={{textAlign:"center", marginTop:"2%",color:"skyblue", textShadow:"2px 4px 6px purple" }}>Search your propety here</h1>
 <form onSubmit={handleSubmit} class="d-flex" role="search" style={{margin:"100px", paddingLeft:"300px", paddingRight:"300px"}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={property} onChange={(e) => setProperty(e.target.value)}/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form> 

      <div className="rentdata">     
     { loading ? "loading......." 
      : <div>{ data.map(items=>(<Rentlist items={items} keys={items._id}/>))}</div>
      }
      </div>

      </div>    
      
       </>
    );
    

    }
    export default Rent;


