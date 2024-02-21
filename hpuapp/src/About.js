import React from "react";
import "./About.css";

import Footer from "./Footer.js";
const About = () => {
    return (
        <>
            <div class="pic">
                <br/>
                <div data-aos="zoom-in">
                <div class="head">
                
                 <h1> About Us</h1>
                 </div>
                </div>
            </div>
            <br/>
            <br/>
            <div class="main">
                <h1>Our Vision</h1>
                
                <br/>
                {/* Paragraph*/}
                <p>Our Vision and Mission are synchronized in delivering the best real estate services and property development. Our Vision is to keep developing the best portfolio of real estate developments in Athens while we strive for the satisfaction or our clients, partners and colleagues.

 Our corporate Mission is “to keep making homes”. Having such a clear concept of business approach, our property development ensures our clients get a home, not just a construction.

 With a focus on location and comfort, we offer our clients a combination of an ideal environment for property investment suitable both for income generation and self-living. We are constantly developing our organization faithfully to the core values we have since our early days.

Trust has been a key reason for our long-term presence and success. Quality in our property developments, in the real estate services we provide and in our team. Unity with our clients and Variety of investment options.</p>
            </div><br/>
            <br/>
            {/*Card1 */}
            <div class="container text-center" style={{marginLeft:"80px"}}>
     <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-left"
    data-aos-duration="1500">
  <img src="https://designpickle.com/wp-content/uploads/2021/09/MG_Scope_Work_Sample_Product_Animations_Video_File_6.gif" class="card-img-top" alt="..." height="190px"/>
  <div class="card-body">
  <h5 class="card-title">Sales and marketing</h5>
    <p class="card-text">Marketing, sales and leasing for our portfolio is managed directly by our marketing and sales team from inception to completion. </p>
  </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-up"
    data-aos-duration="1500">
  <img src="https://thumbs.gfycat.com/DesertedEarlyAnnelida-size_restricted.gif" class="card-img-top" alt="..." height="190px"/>
  <div class="card-body">
  <h5 class="card-title">Management of assets</h5>
    <p class="card-text">We constantly extend our portfolio,retaining the inflow of project acquisition in high levels, minimizing the time.</p>
  </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-right"
    data-aos-duration="1500">
  <img src="https://beamserp.com/wp-content/uploads/2021/10/30027-concept-smart-home-min.gif" class="card-img-top" alt="..." height="190px"/>
  <div class="card-body">
  <h5 class="card-title">Management of property</h5>
    <p class="card-text">Our aftersales-property management team will professionally manage your property either selected.</p>
  </div>
  </div>
  
</div>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
 {/*Card2 */}
 <div class="container text-center" style={{marginLeft:"80px"}}>
     <div class="row">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-left"
    data-aos-duration="1500">
  <img src="https://i.gifer.com/7fW8.gif" class="card-img-top" alt="..." height="180px"/>
  <div class="card-body">
  <h5 class="card-title">Focus on expertise</h5>
    <p class="card-text">We concentrate on the development of both residential and mixed-use properties. MIBS group concerns for the fast adaptation. </p>
  </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-down"
    data-aos-duration="1500">
  <img src="https://media0.giphy.com/media/Q5vd7QBmhieBzfwIMb/giphy.gif" class="card-img-top" alt="..." height="190px"/>
  <div class="card-body">
  <h5 class="card-title">Immigration Services</h5>
    <p class="card-text">Along with our suggested corporate lawyers, we seek to provide full assistance to our buyers in their Golden Visa application procedure.</p>
  </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
    <div data-aos="fade-right"
    data-aos-duration="1500">
  <img src="https://images.squarespace-cdn.com/content/v1/5b1b725df93fd44d70cad841/1543204966612-JYOERHDMAAWXLP8GYEUG/real-estate-property-investment-in-kenya-options.gif" class="card-img-top" alt="..." height="190px"/>
  <div class="card-body">
  <h5 class="card-title">Investment Development</h5>
    <p class="card-text">As a property developer we always look at acquiring new projects. We build or completely reconstruct plots, with facades and luxury interiors..</p>
  </div>
  </div>
 </div>
    </div>
  </div>

</div>
<div className="footerabout">
  <Footer/>
  </div>
      
       
          </>
    );
}
export default About;