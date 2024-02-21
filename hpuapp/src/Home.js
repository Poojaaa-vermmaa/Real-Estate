import React , { useEffect }from "react"; 
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./Footer.js";

const Home = ()=>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return(
        <>
      
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src="https://6amcity.brightspotcdn.com/dims4/default/e561b46/2147483647/strip/true/crop/1600x899+0+1/resize/500x281!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.amazonaws.com%2Fbrightspot%2F37%2F9f%2F91ad89e7455580cc212a33af64d0%2Fjhasir-homes-1-26.gif" class="d-block w-100" height="500px" alt="..."/>
      
    </div>
    <div class="carousel-item" data-bs-interval="8000">
      <img src="https://i.pinimg.com/originals/5a/49/34/5a4934eff974ef30a1dcbc8cd796161d.gif" class="d-block w-100" alt="..." height="500px"/>
      
    </div>
   
  </div>
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 </div>
 <br/>
 <br/>
 <br/>

 {/* card */}
<br/>
<div class="container text-center" style={{padding:"30px"}}>
  <div class="row" style={{marginLeft:"1px"}}>
   
  
  
    <div class="col">
    <div class="card" style={{width:"18rem"}}>
    <div data-aos="fade-up">
  <img src="https://media.designcafe.com/wp-content/uploads/2020/09/25151904/2bhk-apartment-living-room-interior-design.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
  <Link to="/Rent" class="btn btn-info" role="button">Rent Property</Link>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><br/>
  </div>
  </div>
</div>
    </div>
  
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-up">
  <img src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/24090405/Cover-01-2.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    
  <Link to="/Buy" class="btn btn-info" role="button">Buy Property</Link>
    <p class="card-text">You will see various verified listings of properties available in Shimla. The closest properties will be visible. </p>
   </div>
   </div>
   </div>
    </div>
  </div>
</div>

<br/>

{/*  */}



<hr class="border border-danger border-2 opacity-50"/>
<br/>
<div class="container text-center" style={{margin:"80px"}}>

  <div class="row">
    <div class="col-sm-6">
    <div data-aos="fade-right">
      <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" height="100%"  alt=""/>
    </div>
    </div>
    <div class="col-sm-6" style={{marginTop:"80px"}}>
    <div data-aos="fade-left">
    <h3>Safety at home, Safety at work. Two simple ways, NOT to get hurt</h3>
    <b>Safety is a priority at every job even at your home too. If your home is not equipped with safety, then, you might not be safe inside your home. It might also result in you losing your life. So, you should always make sure to have all the safety inside your home</b>
    <br/>
    <img src="https://cdn-icons-gif.flaticon.com/9696/9696860.gif" height="90px" alt="..."/></div>
  </div>
  
  </div>
  </div>
  <br/>
  <hr/>
  <div class="container text-center" style={{margin:"80px"}}>
  <div class="row">
    <div class="col-sm-6" style={{marginTop:"90px"}}> 
    <div data-aos="fade-up-right">
      <h3>Park with Care. Drive with Pride.</h3><br/>
    <b>The parking facility or lot must foremost deal with the Functional/Operational—as in providing for safe and efficient passage of the automobile and driver.</b><br/>
    <img src= "https://cdn-icons-gif.flaticon.com/8722/8722478.gif" height="90px" alt =""/>
    </div>
    </div>
    <div class="col-sm-6">
     <div data-aos="fade-up-left">
      <img src="https://img.freepik.com/premium-photo/vehicle-parked-front-wide-garage-double-door-paved-driveway-typical-contemporary-american-home_127089-25431.jpg" height="400px" alt=""></img>
     </div>
     </div>
  </div>
  </div>
  <hr/>
  <br/>
  <div class="container text-center" style={{margin:"80px"}}>
  <div class="row">
    <div class="col-sm-6">
    <div data-aos="fade-down-right">
      <img src="https://static6.depositphotos.com/1007373/558/i/450/depositphotos_5589620-Keys-to-new-home.jpgg" height="100%"  alt=""/>
    </div>
    </div>
    <div class="col-sm-6" style={{marginTop:"100px"}}>
    <div data-aos="fade-up-left">
      <h3>Better to lockout than luck out.</h3>
      <b>First and foremost, a home security system aims to protect your property and those inside it from burglary, home intrusion, fire, and other environmental disasters such as burst pipes.</b>
    <br/>
    <img src="https://cdn-icons-gif.flaticon.com/10398/10398520.gif" height="90px" alt="..."/></div>
   </div>
   </div>
  </div>
  <br/>
  <hr/>
  <div class="container text-center" style={{margin:"80px"}} >
  <div class="row">
    <div class="col-sm-6" style={{marginTop:"80px"}}> 
    <div data-aos="flip-right"
     data-aos-duration="1500">
      <h3>A Thing of tomorrow</h3><br/>
    <b>How useful is a smart home?
Smart homes are equipped with automated systems that allow users to control various electronic appliances, lighting, security, temperature, air quality, and other features from a single remote or smartphone app.</b><br/>
    <img src= "https://cdn-icons-gif.flaticon.com/10398/10398538.gif" height="90px" alt =""/>
    </div>
    </div>
    <div class="col-sm-6">
    <div data-aos="flip-left"
     data-aos-duration="1500">
      <img src="https://media.istockphoto.com/id/1312912134/photo/house-living-smart-home.jpg?b=1&s=170667a&w=0&k=20&c=35TGQXx273bSuK-OJ98tIgsG_TeX4Azmhps8-zvYEOs=" height="400px" alt=""></img>
    </div>
    </div>
   </div>
  </div>
  <br/>

  <div className="footerhome">
    
    <Footer/>
    </div>
  </>
    );
}
 export default Home;